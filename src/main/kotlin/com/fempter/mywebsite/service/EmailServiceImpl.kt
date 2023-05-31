package com.fempter.mywebsite.service

import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service

@Service
class EmailServiceImpl(private val javaMailSender: JavaMailSender) : EmailService {

    override fun sendEmail() {
    }

}