package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Coupon;
import com.app.repo.CouponRepo;
@Service
public class CouponService {
	@Autowired
	private CouponRepo couponRepo;

	public Coupon saveCoupon(Coupon coupon) {
		return couponRepo.save(coupon);
	}


	public List<Coupon> getCoupons() {
		return couponRepo.findAll();
	}

	public Coupon getCouponById(int id) {
		return couponRepo.findById(id).orElse(null);
	}

	public Coupon getCouponByCode(String code) {
		return couponRepo.findByCode(code);
	}

	public String deleteCoupon(int id) {
		couponRepo.deleteById(id);
		return "Coupon removed !! " + id;
	}
	
	public Coupon updateCoupon(Coupon coupon) {
		Coupon existingCoupon = couponRepo.findById(coupon.getId()).orElse(null);
        existingCoupon.setName(coupon.getName());
        existingCoupon.setCode(coupon.getCode());
        existingCoupon.setCondition(coupon.getCondition());
        existingCoupon.setQuantity(coupon.getQuantity());
        existingCoupon.setStart_date(coupon.getStart_date());
        existingCoupon.setEnd_date(coupon.getEnd_date());
        return couponRepo.save(existingCoupon);
    }
}
