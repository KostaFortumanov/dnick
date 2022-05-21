package com.finki.dnick.domain

import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "comments")
data class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id:Long = 0,

    @Column(name = "from_user")
    val from: String,
    val commentDate: LocalDateTime,
    val content: String,
    @OneToMany
    val replies: MutableList<Comment> = mutableListOf(),
    val likes: Int = 0,
    val discussionId: Long? = null,
)
