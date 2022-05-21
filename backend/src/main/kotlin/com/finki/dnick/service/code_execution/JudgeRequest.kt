package com.finki.dnick.service.code_execution

data class JudgeRequest(
    val language_id: Long = 63,
    val source_code: String,
    val stdin: String?,
    val expected_output: String?,
)
