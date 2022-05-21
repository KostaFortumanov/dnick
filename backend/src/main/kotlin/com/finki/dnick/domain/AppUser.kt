package com.finki.dnick.domain

import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "app_users")
data class AppUser(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    private val username: String,
    val firstName: String,
    val lastName: String,
    val email: String,
    private val password: String,
    private val isEnabled: Boolean = false,

    @ElementCollection
    val likedComments: MutableList<Long> = mutableListOf(),

    @ElementCollection
    val dislikedComments: MutableList<Long> = mutableListOf(),

    @ElementCollection
    val finishedProblems: MutableSet<Long> = mutableSetOf(),

    @ElementCollection
    val finishedCertificates: MutableSet<Long> = mutableSetOf(),

    @OneToOne
    @JoinColumn(name = "certification_id")
    val certification: Certification? = null,
    val timeStarted: LocalDateTime? = null,
) : UserDetails {

    override fun getAuthorities() = mutableListOf(SimpleGrantedAuthority("USER"))

    override fun getPassword() = password

    override fun getUsername() = username

    override fun isAccountNonExpired() = true

    override fun isAccountNonLocked() = true

    override fun isCredentialsNonExpired() = true

    override fun isEnabled() = isEnabled
}
