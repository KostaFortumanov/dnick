package com.finki.dnick.service

import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.repository.CertificationRepository
import com.finki.dnick.repository.DownloadLinkRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.*

@Service
class DownloadLinkService(
    val downloadLinkRepository: DownloadLinkRepository,
    val appUserRepository: AppUserRepository,
    val certificationRepository: CertificationRepository,
) {

    fun getDataFromToken(token: String) = downloadLinkRepository.findByIdOrNull(token)?.let {
        val user = appUserRepository.findByIdOrNull(it.userId)!!
        val certificate = certificationRepository.findByIdOrNull(it.certificationId)!!
        return mapOf(
            "userName" to "${
                user.firstName.replaceFirstChar { firstName ->
                    if (firstName.isLowerCase()) firstName.titlecase(
                        Locale.getDefault()
                    ) else firstName.toString()
                }
            } ${
                user.lastName.replaceFirstChar { lastName ->
                    if (lastName.isLowerCase()) lastName.titlecase(
                        Locale.getDefault()
                    ) else lastName.toString()
                }
            }",
            "certificateTitle" to certificate.title
        )
    } ?: mapOf<String, String>()
}
