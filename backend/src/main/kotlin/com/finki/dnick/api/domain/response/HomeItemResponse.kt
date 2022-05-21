package com.finki.dnick.api.domain.response

data class HomeItemResponse(
    val type: String,
    val title: String,
    val link: String,
    val part: Int,
    val finished: Boolean = false,
)
