package com.finki.dnick.api.domain.response

import java.time.LocalDateTime

data class CommentResponse(
    val id: Long,
    val from: String,
    val commentDate: LocalDateTime,
    val content: String,
    val replies: List<CommentResponse>,
    val likes: Int,
    val isLiked: Boolean = false,
    val isDisliked: Boolean = false,
    val userId: Long,
)
