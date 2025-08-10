package com.wipro.restdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.restdemo.dto.Mobile;
import com.wipro.restdemo.service.repo.MobileRepo;

@Service
public class MobileService {

    @Autowired
    MobileRepo repo;

    public void addMobile(Mobile mobile) {
        repo.addMobile(mobile);
    }

    public List<Mobile> getAllMobiles() {
        return repo.getAllMobiles();
    }

    public String updateMobile(Mobile mobile) {
        boolean updated = repo.updateMobile(mobile);
        return updated ? "Mobile updated" : "Mobile with ID " + mobile.getId() + " not found.";
    }

    public String deleteMobile(int id) {
        boolean deleted = repo.deleteMobile(id);
        return deleted ? "Mobile deleted" : "Mobile with ID " + id + " not found.";
    }
}
