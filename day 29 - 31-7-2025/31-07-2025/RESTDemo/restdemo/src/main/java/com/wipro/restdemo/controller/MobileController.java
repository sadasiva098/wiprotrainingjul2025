package com.wipro.restdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.restdemo.dto.Mobile;
import com.wipro.restdemo.service.MobileService;

@RestController
@RequestMapping("/mobile")
public class MobileController {

    @Autowired
    MobileService service;

    @PostMapping
    public String addMobile(@RequestBody Mobile mobile) {
        service.addMobile(mobile);
        return "Mobile added";
    }

    @GetMapping
    public List<Mobile> getMobiles() {
        return service.getAllMobiles();
    }

    @PutMapping
    public String updateMobile(@RequestBody Mobile mobile) {
        return service.updateMobile(mobile);
    }

    @DeleteMapping
    public String deleteMobile(@RequestParam int id) {
        return service.deleteMobile(id);
    }
}

