package com.finki.dnick.api.domain.response

data class JwtResponse(
    val token: String,
    val id: Long,
    val firstName: String,
    val lastName: String,
    val email: String
)
