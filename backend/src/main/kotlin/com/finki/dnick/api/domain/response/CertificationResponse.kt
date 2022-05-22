package com.finki.dnick.api.domain.response

import com.finki.dnick.domain.Problem

data class CertificationResponse(
    val id: Long,
    val title: String,
    val problems: List<Problem>,
    val timeLeft: Long,
)
