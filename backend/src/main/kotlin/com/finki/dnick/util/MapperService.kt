package com.finki.dnick.util

import com.finki.dnick.api.domain.response.*
import com.finki.dnick.domain.*
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.time.Duration
import java.time.LocalDateTime

@Service
class MapperService {

    fun mapResponseToResponseEntity(result: Response) = when (result) {
        is SuccessResponse<*> -> ResponseEntity.ok(result)
        is NotFoundResponse -> ResponseEntity(result, HttpStatus.NOT_FOUND)
        is BadRequestResponse -> ResponseEntity.badRequest().body(result)
    }

    fun mapToProblemResponse(problem: Problem) = with(problem) {
        ProblemResponse(
            id,
            problemDescription,
            functionDescription,
            returns,
            inputFormat,
            sampleInput,
            sampleOutput,
            explanation,
            starterCode
        )
    }

    fun mapToCommentResponse(comment: Comment, liked: List<Long>, disliked: List<Long>): CommentResponse =
        with(comment) {
            CommentResponse(
                id,
                from,
                commentDate,
                content,
                replies.map {
                    mapToCommentResponse(it, liked, disliked)
                }.sortedBy {
                    it.commentDate
                },
                likes,
                liked.contains(id),
                disliked.contains(id),
                userId
            )
        }

    fun mapToHomeItemResponse(homeItem: HomeItem, user: AppUser?) = with(homeItem) {
        HomeItemResponse(
            type,
            title,
            link,
            part,
            user?.let { user.finishedProblems.contains(link.split("/")[2].toLong()) } ?: false
        )
    }

    fun mapToCertificationResponse(certification: Certification, timeStarted: LocalDateTime?) = with(certification) {
        CertificationResponse(
            id,
            title,
            problems,
            timeLimitSeconds - Duration.between(timeStarted, LocalDateTime.now()).abs().seconds
        )
    }

    fun mapToCertificationHomeResponse(certification: Certification, user: AppUser?) = with(certification) {
        CertificationHomeResponse(
            id,
            title,
            user?.let { user.finishedCertificates.contains(id) } ?: false
        )
    }
}