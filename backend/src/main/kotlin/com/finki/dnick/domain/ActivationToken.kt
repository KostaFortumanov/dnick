package com.finki.dnick.domain

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToOne
import javax.persistence.Table

@Entity
@Table(name = "activation_tokens")
data class ActivationToken(
    @Id
    val token: String,

    @OneToOne
    @JoinColumn(name = "app_user_id")
    val appUser: AppUser
)
