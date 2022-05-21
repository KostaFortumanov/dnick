package com.finki.dnick.api

import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.service.CommentService
import com.finki.dnick.util.MapperService
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/discussion")
class DiscussionController(
    val commentService: CommentService,
    val mapperService: MapperService,
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
}
