package com.finki.dnick.repository

import com.finki.dnick.domain.AppUser
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AppUserRepository : JpaRepository<AppUser, Long> {

    fun findByEmail(email: String): AppUser?
    fun findByUsername(username: String): AppUser?
}