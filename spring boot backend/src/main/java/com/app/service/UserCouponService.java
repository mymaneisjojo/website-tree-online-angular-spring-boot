package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.UserCoupon;
import com.app.repo.UserCouponRepo;
@Service
public class UserCouponService {
	@Autowired
	private UserCouponRepo userCouponRepo;

	public UserCoupon saveUserCoupon(UserCoupon userCoupon) {
		return userCouponRepo.save(userCoupon);
	}


	public List<UserCoupon> getUserCoupons() {
		return userCouponRepo.findAll();
	}

	public UserCoupon getUserCouponById(int id) {
		return userCouponRepo.findById(id).orElse(null);
	}

	public String deleteUserCoupon(int id) {
		userCouponRepo.deleteById(id);
		return "UserCoupon removed !! " + id;
	}
	
	public UserCoupon updateUserCoupon(UserCoupon userCoupon) {
		UserCoupon existingUserCoupon = userCouponRepo.findById(userCoupon.getId()).orElse(null);
        existingUserCoupon.setCus(userCoupon.getCus());
        existingUserCoupon.setCou(userCoupon.getCou());
        existingUserCoupon.setStatus(1);
        return userCouponRepo.save(existingUserCoupon);
    }
}
