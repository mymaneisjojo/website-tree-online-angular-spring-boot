package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Rate;
import com.app.service.RateService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/rate")
public class RateController {
	@Autowired 
	private RateService rateService;
	
	@PostMapping("/add")
    public Rate addRate(@RequestBody Rate rate) {
        return rateService.saverate(rate);
    }

    @GetMapping("/all")
    public List<Rate> findAllRates() {
        return rateService.getRates();
    }
    
    @GetMapping("/findRateByProductId/{productId}")
    public List<Rate> findAllRates(@PathVariable int productId) {
        return rateService.findRateByProductId(productId);
    }
    
    @GetMapping("/{id}")
    public Rate findRateById(@PathVariable int id) {
        return rateService.getRateById(id);
    }

    
    @DeleteMapping("/delete/{id}")
    public String deleteRate(@PathVariable int id) {
        return rateService.deleteRate(id);
    }
    
    
}
