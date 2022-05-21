package com.finki.dnick.domain

import javax.persistence.*

@Entity
@Table(name = "test_cases")
data class TestCase(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val input: String?,
    val expected: String,
    val problemId: Long,
)
