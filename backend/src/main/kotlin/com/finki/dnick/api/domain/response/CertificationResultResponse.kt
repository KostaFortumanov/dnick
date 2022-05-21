package com.finki.dnick.api.domain.response

data class CertificationResultResponse(
    val problems: List<String>,
    val points: Float,
    val passed: Boolean,
    val link: String? = null,
)
