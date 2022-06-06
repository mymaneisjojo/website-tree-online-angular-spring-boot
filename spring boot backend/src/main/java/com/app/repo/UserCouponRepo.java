package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.UserCoupon;

public interface UserCouponRepo extends JpaRepository<UserCoupon, Integer>{

	

}
