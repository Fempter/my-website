package com.fempter.mywebsite.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MyWebsiteController {

    @Value("${hello.message}")
    private String message;

    @GetMapping("/")
    public String helloMessage(Model model) {
        //model.addAttribute("message", message);
        return "index"; //view name
    }

    // pass some parameter like /hello?name=thymeleaf
    @GetMapping("/hello")
    public String helloWithParam(@RequestParam(name = "name", defaultValue = "springboot")
            String name, Model model) {
        model.addAttribute("message", name);
        return "hello-world"; //view name
    }

}
