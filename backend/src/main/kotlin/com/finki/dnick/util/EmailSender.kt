package com.finki.dnick.util

import org.springframework.beans.factory.annotation.Value
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Service

@Service
class EmailSender(val mailSender: JavaMailSender) {

    @Value("\${email}")
    private val fromMail: String = ""

    @Value("\${frontUrl}")
    private val frontURL: String = ""

    fun sendNewAccountMail(to: String, token: String) {
        val subject = "Learn to code account activation"
        val text = """Activate your account on the following link
            |$frontURL/activate?token=${token}""".trimMargin()

        sendEmail(to, subject, text)
    }

    @Async
    fun sendEmail(to: String, subject: String, text: String) {
        val message = SimpleMailMessage()

        message.setFrom(fromMail)
        message.setTo(to)
        message.setSubject(subject)
        message.setText(text)

        mailSender.send(message)
    }
}