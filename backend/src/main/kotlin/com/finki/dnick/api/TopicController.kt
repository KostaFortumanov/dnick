package com.finki.dnick.api

import com.finki.dnick.api.domain.response.Response
import com.finki.dnick.service.HomeItemService
import com.finki.dnick.service.TopicService
import com.finki.dnick.util.MapperService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/topic")
@CrossOrigin(origins = ["*"])
class TopicController(
    val topicService: TopicService,
    val homeItemService: HomeItemService,
    val mapperService: MapperService,
) {

    @GetMapping
    fun getHomeItems(authentication: Authentication?) = homeItemService.getAll(authentication?.name)

    @GetMapping("/{id}")
    fun getTopic(@PathVariable id: Long): ResponseEntity<out Response> {
        val result = topicService.getTopic(id)
        return mapperService.mapResponseToResponseEntity(result)
    }
}
