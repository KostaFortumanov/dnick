package com.finki.dnick.scheduler

import com.finki.dnick.repository.AppUserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class TaskDefinitionBean(
    val taskSchedulingService: TaskSchedulingService,
    val userRepository: AppUserRepository,
) : Runnable {

    private var taskDefinition: TaskDefinition? = null

    override fun run() {
        println("RUNNING")
        userRepository.findByIdOrNull(taskDefinition?.userId)?.let {
            userRepository.save(it.copy(certification = null, timeStarted = null))
            taskSchedulingService.removeScheduledTask(taskDefinition?.jobId!!)
        }
    }

    fun setTaskDefinition(taskDefinition: TaskDefinition?) {
        this.taskDefinition = taskDefinition
    }
}
