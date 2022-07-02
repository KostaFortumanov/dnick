package com.finki.dnick.api

import com.finki.dnick.api.domain.response.BadRequestResponse
import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.api.domain.response.SuccessResponse
import com.finki.dnick.domain.AppUser
import com.finki.dnick.domain.Comment
import com.finki.dnick.service.AppUserService
import com.finki.dnick.service.CommentService
import com.finki.dnick.util.MapperService
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime

@RestController
@RequestMapping("/api/discussion")
@CrossOrigin(origins = ["*"])
class DiscussionController(
    val commentService: CommentService,
    val mapperService: MapperService,
    val appUserService: AppUserService
) {

    @GetMapping("/{id}")
    fun getDiscussion(@PathVariable id: Long, pageable: Pageable) =
        commentService.getCommentsFromDiscussionPaged(id, pageable)

    @PostMapping("/post/{id}")
    fun postComment(@PathVariable id: Long, @RequestBody content: String): ResponseEntity<out Response> {
        val result = commentService.postComment(id, content)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @PostMapping("/reply/{id}")
    fun replyToComment(@PathVariable id: Long, @RequestBody content: String): ResponseEntity<out Response> {
        val result = commentService.replyToComment(id, content)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @PutMapping("/like/{id}")
    fun likeComment(@PathVariable id: Long): ResponseEntity<out Response> {
        val result = commentService.likeComment(id)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @PutMapping("/dislike/{id}")
    fun dislikeComment(@PathVariable id: Long): ResponseEntity<out Response> {
        val result = commentService.dislikeComment(id)
        return mapperService.mapResponseToResponseEntity(result)
    }

    @DeleteMapping("/delete/{id}")
    fun deleteComment(@PathVariable id: Long) = if (commentService.deleteComment(id) == 1) {
        val user = getUser()
        val liked = user.likedComments
        val disliked = user.dislikedComments
        val comment = commentService.findComment(id)!!
        val response = SuccessResponse(mapperService.mapToCommentResponse(comment, liked, disliked))
        if((comment.replies.isEmpty() || comment.replies.all { it.userId == 0L }) && comment.discussionId != null) {
            commentService.deleteById(id)
            SuccessResponse(Comment(id = id, from="", commentDate = LocalDateTime.now(), content = "", userId = -1))
        } else if(comment.discussionId == null) {
            val parent = commentService.findParentComment(comment)
            val allDeleted = parent.userId == 0L && parent.replies.all { it.userId == 0L }
            if(allDeleted) {
                commentService.deleteById(parent.id)
                SuccessResponse(Comment(id = parent.id, from="", commentDate = LocalDateTime.now(), content = "", userId = -1))
            } else {
                response
            }
        } else {
            response
        }
    } else {
        BadRequestResponse("Comment bot found")
    }

    @PutMapping("/edit/{id}")
    fun editComment(@PathVariable id: Long, @RequestBody content: String): ResponseEntity<out Response> {
        val result = commentService.editComment(id, content)
        return mapperService.mapResponseToResponseEntity(result)
    }

    private fun getUser() =
        appUserService.loadUserByUsername((SecurityContextHolder.getContext().authentication.principal as AppUser).username)!!
}
