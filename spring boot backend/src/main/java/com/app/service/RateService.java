package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.OrderDetail;
import com.app.model.Rate;
import com.app.model.Rate;
import com.app.model.Rate;
import com.app.repo.RateRepo;

@Service
public class RateService {
	@Autowired
	private RateRepo rateRepo;
	
	
	public Rate saverate(Rate rate) {
		return rateRepo.save(rate);
	}
	
	public List<Rate> getRates() {
		return (List<Rate>) rateRepo.findAll();
	}
	
	public Rate getRateById(int id) {
		return rateRepo.findById(id).orElse(null);
	}
	
	public Rate updateRate(Rate rate) {
		Rate existingRate = rateRepo.findById(rate.getId()).orElse(null);
        existingRate.setStar(rate.getStar());
        existingRate.setDescription(rate.getDescription());
        existingRate.setStatus(rate.getStatus());
        return rateRepo.save(existingRate);
    }
	
	
	public List<Rate> findRateByProductId(int productId) {
		return rateRepo.findRateByProductId(productId);
	}
	 
	public String deleteRate(int id) {
		rateRepo.deleteById(id);
		return "rate removed !! " + id;
	}
	
}
