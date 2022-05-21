package com.finki.dnick.repository

import com.finki.dnick.domain.ActivationToken
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ActivationTokenRepository : JpaRepository<ActivationToken, String> {
}