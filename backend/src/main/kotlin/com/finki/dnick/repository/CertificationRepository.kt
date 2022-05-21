package com.finki.dnick.repository

import com.finki.dnick.domain.Certification
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CertificationRepository : JpaRepository<Certification, Long> {
}
