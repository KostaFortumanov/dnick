package com.finki.dnick.api

import com.finki.dnick.api.domain.request.LoginRequest
import com.finki.dnick.api.domain.request.RegisterRequest
import com.finki.dnick.api.domain.response.JwtResponse
import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.domain.AppUser
import com.finki.dnick.repository.CommentRepository
import com.finki.dnick.security.jwt.JwtUtils
import com.finki.dnick.service.AppUserService
import com.finki.dnick.util.MapperService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/auth")
class AuthController(
    val authenticationManager: AuthenticationManager,
    val jwtUtils: JwtUtils,
    val appUserService: AppUserService,
    val mapperService: MapperService,
    val commentRepository: CommentRepository,
) {

    @PostMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequest): ResponseEntity<JwtResponse> {

        val authentication = authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(
                loginRequest.username.lowercase(),
                loginRequest.password
            )
        )

        SecurityContextHolder.getContext().authentication = authentication
        val jwt = jwtUtils.generateJwtToken(authentication)

        val appUser = authentication.principal as AppUser
        return ResponseEntity.ok(
            JwtResponse(
                jwt,
                appUser.id,
                appUser.firstName,
                appUser.lastName,
                appUser.email,
            )
        )
    }

    @PostMapping("/register")
    fun register(@RequestBody registerRequest: RegisterRequest): ResponseEntity<out Response> {
        val result = appUserService.registerUser(registerRequest)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @GetMapping("/activate")
    fun activateAccount(@RequestBody token: String): ResponseEntity<out Response> {
        val result = appUserService.activateAccount(token)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @GetMapping("/test")
    fun test() = commentRepository.findByIdOrNull(1)
}
