package com.wipro.restdemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {
	@GetMapping("/weather")
	String sayWeather(@RequestParam String city,@RequestParam String day)
	{
		return "Weather in " +city+" for "+ day + " is cloudy.";
	}
	
	@GetMapping("/tocentigrade/{Fahrenheit}")
	String tocentigrade(@PathVariable double Fahrenheit)
	{
		double centigrade = (Fahrenheit - 32) * 5 / 9;
		return "centigrade equivalent is " + centigrade;
	}
}
