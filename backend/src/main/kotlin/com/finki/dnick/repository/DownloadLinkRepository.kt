package com.finki.dnick.repository

import com.finki.dnick.domain.DownloadLink
import org.springframework.data.jpa.repository.JpaRepository

interface DownloadLinkRepository : JpaRepository<DownloadLink, String> {

    fun findAllByUserId(userId: Long): List<DownloadLink>

    fun findByCertificationIdAndUserId(certificationId: Long, userId: Long): DownloadLink?
}
