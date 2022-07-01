package com.finki.dnick.domain

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "comments")
data class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "from_user")
    val from: String,
    val commentDate: LocalDateTime,
    val content: String,
    @OneToMany(cascade = [CascadeType.ALL])
    val replies: MutableList<Comment> = mutableListOf(),
    val likes: Int = 0,
    val discussionId: Long? = null,
    val userId: Long,
)
