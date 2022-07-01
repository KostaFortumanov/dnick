package com.finki.dnick.service

import com.finki.dnick.api.domain.response.*
import com.finki.dnick.domain.DownloadLink
import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.repository.CertificationRepository
import com.finki.dnick.repository.DownloadLinkRepository
import com.finki.dnick.scheduler.TaskDefinition
import com.finki.dnick.scheduler.TaskDefinitionBean
import com.finki.dnick.scheduler.TaskSchedulingService
import com.finki.dnick.service.code_execution.CodeExecutionService
import com.finki.dnick.util.MapperService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.time.LocalTime
import java.util.*

@Service
class CertificationService(
    val certificationRepository: CertificationRepository,
    val mapperService: MapperService,
    val appUserRepository: AppUserRepository,
    val codeExecutionService: CodeExecutionService,
    val downloadLinkRepository: DownloadLinkRepository,
    val taskSchedulingService: TaskSchedulingService,
    val taskDefinitionBean: TaskDefinitionBean,
) {

    fun getActiveCertification(): Response {
        val user = appUserRepository.findByUsername(SecurityContextHolder.getContext().authentication.name)!!
        return user.certification?.let {
            val response = mapperService.mapToCertificationResponse(it, user.timeStarted)
            return if (response.timeLeft > 0) {
                SuccessResponse(response)
            } else {
                appUserRepository.save(user.copy(certification = null, timeStarted = null))
                BadRequestResponse("Test expired")
            }
        } ?: NotFoundResponse("No Active Certification Found")
    }

    fun getAll(userName: String?) = certificationRepository.findAll().map {
        val user = userName?.let { appUserRepository.findByUsername(userName) }
        mapperService.mapToCertificationHomeResponse(it, user)
    }

    fun start(id: Long) = certificationRepository.findByIdOrNull(id)?.let {
        val user = appUserRepository.findByUsername(SecurityContextHolder.getContext().authentication.name)!!
        user.certification?.let {
            BadRequestResponse("Certification already in progress")
        } ?: run {
            appUserRepository.save(user.copy(certification = it, timeStarted = LocalDateTime.now()))

            val time = LocalTime.now().plusSeconds(it.timeLimitSeconds.toLong() + 10)
            val cron = "${time.second} ${time.minute} ${time.hour} * * *"
            val jobId = UUID.randomUUID().toString()

            taskDefinitionBean.setTaskDefinition(TaskDefinition(cron, jobId, user.id))

            taskSchedulingService.scheduleATask(jobId, taskDefinitionBean, cron)

            SuccessResponse(it.problems.size)
        }
    } ?: NotFoundResponse("Certification not found")

    fun submit(sourceCodes: List<String>): Response {
        val user = appUserRepository.findByUsername(SecurityContextHolder.getContext().authentication.name)!!
        val problemResults = mutableListOf<String>()
        var score = 0f
        user.certification?.let {
            for ((index, problem) in it.problems.withIndex()) {
                val result = codeExecutionService.createSubmission(problem.id, sourceCodes[index])
                val (passed, failed) = result.partition { test -> test.passed }
                problemResults.add("Problem ${index + 1} - ${passed.size}/${passed.size + failed.size}")
                score += 100f / it.problems.size / (passed.size + failed.size) * passed.size
            }

            val passed = score >= 70
            var token: String? = null
            if (passed && !user.finishedCertificates.contains(it.id)) {
                token = UUID.randomUUID().toString()
                downloadLinkRepository.save(DownloadLink(token, user.id, it.id))
                user.finishedCertificates.add(it.id)
            }
            appUserRepository.save(user.copy(certification = null, timeStarted = null))
            return SuccessResponse(
                CertificationResultResponse(
                    problemResults,
                    score,
                    passed,
                    "http://localhost:8080/api/certify/download?token=${
                        token ?: downloadLinkRepository.findByCertificationIdAndUserId(
                            it.id,
                            user.id
                        )?.token
                    }"
                )
            )
        }

        return NotFoundResponse("No active certification")
    }

    fun getCompleted() =
        appUserRepository.findByUsername(SecurityContextHolder.getContext().authentication.name)?.let { user ->
            downloadLinkRepository.findAllByUserId(user.id).map {
                MyProfileResponse(
                    certificationRepository.findByIdOrNull(it.certificationId)?.title ?: "",
                    "https://dnick-api-protitip.herokuapp.com/api/certify/download?token=${it.token}"
                )
            }
        }
}
