package com.finki.dnick.service

import com.finki.dnick.api.domain.response.*
import com.finki.dnick.domain.AppUser
import com.finki.dnick.domain.Comment
import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.repository.CommentRepository
import com.finki.dnick.util.MapperService
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class CommentService(
    val commentRepository: CommentRepository,
    val mapperService: MapperService,
    val appUserRepository: AppUserRepository,
    val appUserService: AppUserService,
) {

    fun getCommentsFromDiscussionPaged(discussionId: Long, pageable: Pageable): Page<CommentResponse> {
        val comments = commentRepository.findAllByDiscussionId(discussionId, pageable)
        val user = getUser()

        val liked = user.likedComments
        val disliked = user.dislikedComments
        val commentResponse = comments.content.map {
            mapperService.mapToCommentResponse(it, liked, disliked)
        }

        return PageImpl(commentResponse, pageable, comments.totalElements)
    }

    fun postComment(id: Long, content: String): Response {
        val user = getUser()
        val comment = Comment(
            from = "${user.firstName} ${user.lastName}",
            commentDate = LocalDateTime.now(),
            content = content,
            discussionId = id,
            userId = user.id
        )

        return SuccessResponse(
            mapperService.mapToCommentResponse(
                commentRepository.save(comment), listOf(), listOf()
            )
        )
    }

    fun replyToComment(id: Long, content: String) = commentRepository.findByIdOrNull(id)?.let {
        val user = getUser()
        val reply = commentRepository.save(
            Comment(
                from = "${user.firstName} ${user.lastName}",
                commentDate = LocalDateTime.now(),
                content = content,
                userId = user.id
            )
        )
        it.replies.add(reply)
        commentRepository.save(it)
        SuccessResponse(reply)

    } ?: NotFoundResponse("Comment not found")

    @Transactional
    fun likeComment(id: Long) = commentRepository.findByIdOrNull(id)?.let {
        val user = getUser()
        if (!user.likedComments.contains(id)) {
            val removed = user.dislikedComments.remove(id)
            user.likedComments.add(id)
            if (commentRepository.like(id) == 1) {
                appUserRepository.save(user)
                if (removed) {
                    commentRepository.like(id)
                    SuccessResponse(commentRepository.getById(id).likes + 2)
                } else {
                    SuccessResponse(commentRepository.getById(id).likes + 1)
                }
            } else {
                BadRequestResponse("Error updating")
            }
        } else {
            user.likedComments.remove(id)
            if (commentRepository.dislike(id) == 1) {
                appUserRepository.save(user)
                SuccessResponse(commentRepository.getById(id).likes - 1)
            } else {
                BadRequestResponse("Error updating")
            }
        }
    } ?: NotFoundResponse("Comment not found")

    @Transactional
    fun dislikeComment(id: Long) = commentRepository.findByIdOrNull(id)?.let {
        val user = getUser()
        if (!user.dislikedComments.contains(id)) {
            val removed = user.likedComments.remove(id)
            user.dislikedComments.add(id)
            if (commentRepository.dislike(id) == 1) {
                appUserRepository.save(user)
                if (removed) {
                    commentRepository.dislike(id)
                    SuccessResponse(commentRepository.getById(id).likes - 2)
                } else {
                    SuccessResponse(commentRepository.getById(id).likes - 1)
                }
            } else {
                BadRequestResponse("Error updating")
            }
        } else {
            user.dislikedComments.remove(id)
            if (commentRepository.like(id) == 1) {
                appUserRepository.save(user)
                SuccessResponse(commentRepository.getById(id).likes + 1)
            } else {
                BadRequestResponse("Error updating")
            }
        }
    } ?: NotFoundResponse("Comment not found")

    private fun getUser() =
        appUserService.loadUserByUsername((SecurityContextHolder.getContext().authentication.principal as AppUser).username)!!

    @Transactional
    fun deleteComment(id: Long): Int = commentRepository.deleteComment(
        id = id,
        content = "Comment has been deleted",
        from = "",
        userId = 0L
    )

    fun findComment(id: Long) = commentRepository.findByIdOrNull(id)

    fun deleteById(id: Long) = commentRepository.deleteById(id)

    @Transactional
    fun editComment(id: Long, content: String) = if (commentRepository.editComment(id, content) == 1) {
        SuccessResponse("Comment edited successfully")
    } else {
        BadRequestResponse("Comment not edited")
    }

    fun findParentComment(reply: Comment): Comment = commentRepository.findByReplies(reply)
}
