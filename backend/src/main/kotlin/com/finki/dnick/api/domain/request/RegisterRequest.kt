package com.finki.dnick.api.domain.request

data class RegisterRequest(
    val username: String,
    val email: String,
    val firstName: String,
    val lastName: String,
    val password: String,
    val confirmPassword: String,
)
