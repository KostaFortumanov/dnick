package com.finki.dnick.api.domain.response

data class ProblemResponse(
    val id: Long,
    val problemDescription: String?,
    val functionDescription: String?,
    val returns: String?,
    val inputFormat: String?,
    val sampleInput: String?,
    val sampleOutput: String?,
    val explanation: String?,
    val starterCode: String?,
)
