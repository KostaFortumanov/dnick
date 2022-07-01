package com.finki.dnick.service

import com.finki.dnick.api.domain.request.RegisterRequest
import com.finki.dnick.api.domain.response.BadRequestResponse
import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.api.domain.response.SuccessResponse
import com.finki.dnick.domain.AppUser
import com.finki.dnick.repository.AppUserRepository
import org.apache.commons.validator.routines.EmailValidator
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AppUserService(
    val appUserRepository: AppUserRepository,
    val passwordEncoder: PasswordEncoder,
) : UserDetailsService {

    override fun loadUserByUsername(username: String) = appUserRepository.findByUsername(username)

    fun registerUser(registerRequest: RegisterRequest): Response = with(registerRequest) {

        if (password != confirmPassword) {
            return BadRequestResponse("Passwords don't match")
        }

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
            return SuccessResponse("User registered successfully")
        }

        return BadRequestResponse("Invalid email format")
    }
}