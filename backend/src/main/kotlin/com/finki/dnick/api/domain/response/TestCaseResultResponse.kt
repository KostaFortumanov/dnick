package com.finki.dnick.api.domain.response

data class TestCaseResultResponse(
    val input: String?,
    val expected: String,
    val got: String?,
    val passed: Boolean = false,
)
