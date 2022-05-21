package com.finki.dnick.service

import com.finki.dnick.repository.AppUserRepository
import com.finki.dnick.repository.HomeItemRepository
import com.finki.dnick.util.MapperService
import org.springframework.stereotype.Service

@Service
class HomeItemService(
    val homeItemRepository: HomeItemRepository,
    val appUserRepository: AppUserRepository,
    val mapperService: MapperService,
) {

    fun getAll(userName: String?) = homeItemRepository.findAll()
        .sortedBy { it.id }
        .map {
            val user = userName?.let { appUserRepository.findByUsername(userName) }
            mapperService.mapToHomeItemResponse(it, user)
        }
        .groupBy { it.part }
}
