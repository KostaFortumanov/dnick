package com.finki.dnick.service

import com.finki.dnick.api.domain.response.NotFoundResponse
import com.finki.dnick.api.domain.response.SuccessResponse
import com.finki.dnick.repository.TopicRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class TopicService(
    val topicRepository: TopicRepository,
) {
    fun getTopic(id: Long) = topicRepository.findByIdOrNull(id)?.let {
        SuccessResponse(it)
    } ?: NotFoundResponse("Topic not found")
}
