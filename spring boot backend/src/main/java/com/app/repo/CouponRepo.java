package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Coupon;

public interface CouponRepo extends JpaRepository<Coupon, Integer>{

	Coupon findByName(String name);

	Coupon findByCode(String code);

}
