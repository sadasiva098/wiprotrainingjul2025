package com.wipro.Interface;
public class PhonePe implements DigitalPayment {
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using PhonePe.");
    }
}