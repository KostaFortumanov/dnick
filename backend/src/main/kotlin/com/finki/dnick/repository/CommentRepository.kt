package com.finki.dnick.repository

import com.finki.dnick.domain.Comment
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CommentRepository : JpaRepository<Comment, Long> {

    fun findAllByDiscussionId(discussionId: Long, pageable: Pageable): Page<Comment>

    @Modifying
    @Query(value = "update Comment c set c.likes=c.likes+1 where c.id=:id")
    fun like(id: Long): Int

    @Modifying
    @Query(value = "update Comment c set c.likes=c.likes-1 where c.id=:id")
    fun dislike(id: Long): Int
}