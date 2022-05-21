package com.finki.dnick.domain

import javax.persistence.*

@Entity
@Table(name = "problems")
data class Problem(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val problemDescription: String?,
    val functionDescription: String?,
    val returns: String?,
    val inputFormat: String?,
    val sampleInput: String?,
    val sampleOutput: String?,
    val explanation: String?,
    val starterCode: String?,
)
