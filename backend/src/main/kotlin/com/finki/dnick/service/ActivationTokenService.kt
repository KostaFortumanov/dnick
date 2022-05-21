package com.finki.dnick.service

import com.finki.dnick.domain.ActivationToken
import com.finki.dnick.domain.AppUser
import com.finki.dnick.repository.ActivationTokenRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ActivationTokenService(val activationTokenRepository: ActivationTokenRepository) {

    fun createTokenForUser(appUser: AppUser): ActivationToken {
        val token = UUID.randomUUID().toString()
        return activationTokenRepository.save(ActivationToken(token, appUser))
    }

    fun saveToken(activationToken: ActivationToken) = activationTokenRepository.save(activationToken)

    fun getToken(token: String): ActivationToken? = activationTokenRepository.findByIdOrNull(token)

    fun deleteToken(activationToken: ActivationToken) = activationTokenRepository.delete(activationToken)

    fun deleteAllTokens() = activationTokenRepository.deleteAll()
}