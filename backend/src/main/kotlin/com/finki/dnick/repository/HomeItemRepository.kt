package com.finki.dnick.repository

import com.finki.dnick.domain.HomeItem
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HomeItemRepository : JpaRepository<HomeItem, Long> {
}
