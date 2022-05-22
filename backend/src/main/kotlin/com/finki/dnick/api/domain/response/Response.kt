package com.finki.dnick.api.domain.response

sealed interface Response

data class SuccessResponse<T>(val response: T) : Response
data class NotFoundResponse(val message: String) : Response
data class BadRequestResponse(val message: String) : Response
