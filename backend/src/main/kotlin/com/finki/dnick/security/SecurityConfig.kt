package com.finki.dnick.security

import com.finki.dnick.security.jwt.AuthTokenFilter
import com.finki.dnick.service.AppUserService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfig(
    val authTokenFilter: AuthTokenFilter,
    val appUserService: AppUserService,
    val passwordEncoder: PasswordEncoder,
) : WebSecurityConfigurerAdapter() {

    private val publicMatchers = arrayOf(
        "/api/auth/**",
        "/api/topic/**",
        "/api/problem/{id}",
        "/api/certify/download"
    )

    override fun configure(http: HttpSecurity) {
        http.cors().and().csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests().antMatchers(*publicMatchers).permitAll()
            .anyRequest().authenticated()

        http.addFilterBefore(authTokenFilter, UsernamePasswordAuthenticationFilter::class.java)
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(appUserService).passwordEncoder(passwordEncoder)
    }

    @Bean
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }
}