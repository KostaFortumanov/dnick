package com.finki.dnick.repository

import com.finki.dnick.domain.TestCase
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TestCaseRepository : JpaRepository<TestCase, Long> {

    fun findAllByProblemId(id: Long): List<TestCase>
}