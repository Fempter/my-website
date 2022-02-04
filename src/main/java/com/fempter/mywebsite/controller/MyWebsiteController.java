package com.fempter.mywebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyWebsiteController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

}
