package com.finki.dnick.service

import com.finki.dnick.api.domain.request.RegisterRequest
import com.finki.dnick.api.domain.response.BadRequestResponse
import com.finki.dnick.api.domain.response.NotFoundResponse
import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.api.domain.response.SuccessResponse
import com.finki.dnick.domain.AppUser
import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.util.EmailSender
import org.apache.commons.validator.routines.EmailValidator
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class AppUserService(
    val appUserRepository: AppUserRepository,
    val activationTokenService: ActivationTokenService,
    val passwordEncoder: PasswordEncoder,
    val emailSender: EmailSender,
) : UserDetailsService {

    override fun loadUserByUsername(username: String) = appUserRepository.findByUsername(username)

    fun registerUser(registerRequest: RegisterRequest): Response = with(registerRequest) {
        if (EmailValidator.getInstance().isValid(email)) {

            appUserRepository.findByEmail(email)?.let {
                return BadRequestResponse("Email already exists")
            }

            appUserRepository.findByUsername(username)?.let {
                return BadRequestResponse("Username already exists")
            }

            val appUser = AppUser(
                username = username,
                firstName = firstName,
                lastName = lastName,
                email = email,
                password = passwordEncoder.encode(password),
                isEnabled = true
            )

            appUserRepository.save(appUser)
            val activationToken = activationTokenService.createTokenForUser(appUser)
//            emailSender.sendNewAccountMail(email, activationToken.token)
            return SuccessResponse("User registered successfully")
        }

        return BadRequestResponse("Invalid email format")
    }

    @Transactional
    fun activateAccount(token: String): Response {
        val activationToken = activationTokenService.getToken(token)

        val appUser = activationToken?.appUser ?: return NotFoundResponse("Token doesn't exists or is expired")

        val activatedUser = appUser.copy(isEnabled = true)

        appUserRepository.save(activatedUser)
        activationTokenService.deleteToken(activationToken)

        return SuccessResponse("Account activated successfully")
    }
}