package com.finki.dnick.service

import com.finki.dnick.api.domain.response.NotFoundResponse
import com.finki.dnick.api.domain.response.SuccessResponse
import com.finki.dnick.repository.ProblemRepository
import com.finki.dnick.util.MapperService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ProblemService(
    val problemRepository: ProblemRepository,
    val mapperService: MapperService,
) {

    fun getProblem(id: Long) = problemRepository.findByIdOrNull(id)?.let {
        SuccessResponse(mapperService.mapToProblemResponse(it))
    } ?: NotFoundResponse("Problem not found")
}
