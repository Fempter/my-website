package com.fempter.mywebsite.controller;

import com.fempter.mywebsite.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.StringJoiner;

@Controller
public class MyWebsiteController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MyWebsiteController.class);

    private final EmailService emailService;

    public MyWebsiteController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("message", new Message());
        return "index";
    }

    @PostMapping("/contact")
    public String contactMe(@ModelAttribute("message") final Message message) {
        LOGGER.info("Email is here! {}", message);
        return "redirect:/";
    }

    private static class Message {

        private String userEmail;
        private String userName;
        private String userMessage;

        public String getUserEmail() {
            return userEmail;
        }

        public void setUserEmail(String userEmail) {
            this.userEmail = userEmail;
        }

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getUserMessage() {
            return userMessage;
        }

        public void setUserMessage(String userMessage) {
            this.userMessage = userMessage;
        }

        @Override
        public String toString() {
            return new StringJoiner(", ", Message.class.getSimpleName() + "[", "]")
                    .add("userEmail='" + userEmail + "'")
                    .add("userName='" + userName + "'")
                    .add("userMessage='" + userMessage + "'")
                    .toString();
        }
    }

}
