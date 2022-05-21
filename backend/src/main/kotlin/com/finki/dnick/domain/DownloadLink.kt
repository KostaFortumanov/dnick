package com.finki.dnick.domain

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "download_links")
data class DownloadLink(
    @Id
    val token: String,
    val userId: Long,
    val certificationId: Long,
)
