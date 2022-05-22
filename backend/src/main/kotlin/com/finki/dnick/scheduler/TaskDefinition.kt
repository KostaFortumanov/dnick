package com.finki.dnick.scheduler

data class TaskDefinition(
    val cronExpression: String,
    val jobId: String,
    val userId: Long,
)
