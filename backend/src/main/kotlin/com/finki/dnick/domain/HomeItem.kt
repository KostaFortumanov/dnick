package com.finki.dnick.domain

import javax.persistence.*

@Entity
@Table(name = "home_items")
data class HomeItem(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val type: String,
    val title: String,
    val link: String,
    val part: Int,
)
