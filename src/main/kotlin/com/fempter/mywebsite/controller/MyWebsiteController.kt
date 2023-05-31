package com.fempter.mywebsite.controller

import com.fempter.mywebsite.model.CreateMessage
import com.fempter.mywebsite.model.Message
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute

@Controller
class MyWebsiteController {

    private val logger = LoggerFactory.getLogger(javaClass)

    @GetMapping("/")
    fun index(model: Model): String {
        model.addAttribute("message", CreateMessage())
        return "index"
    }

    @GetMapping("/contactMe")
    fun contactMe(@ModelAttribute("message") message: CreateMessage): String {
        logger.info("Email is here! {}", message)
        return "redirect:/"
    }


}