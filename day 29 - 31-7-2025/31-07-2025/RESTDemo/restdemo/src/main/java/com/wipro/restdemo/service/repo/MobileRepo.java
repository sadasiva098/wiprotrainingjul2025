package com.wipro.restdemo.service.repo;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.stereotype.Repository;

import com.wipro.restdemo.dto.Mobile;

@Repository
public class MobileRepo {
	List<Mobile> mobiles = new CopyOnWriteArrayList<>();

    public void addMobile(Mobile mobile) {
        mobiles.add(mobile);
    }

    public List<Mobile> getAllMobiles() {
        return mobiles;
    }
    

    public boolean updateMobile(Mobile updatedMobile) {
        for (Mobile mobile : mobiles) {
            if (mobile.getId() == updatedMobile.getId()) {
                mobile.setMake(updatedMobile.getMake());
                mobile.setModelNumber(updatedMobile.getModelNumber());
                mobile.setPrice(updatedMobile.getPrice());
                return true;
            }
        }
        return false;
    }

    public boolean deleteMobile(int id) {
        return mobiles.removeIf(mobile -> mobile.getId() == id);
    }
}
