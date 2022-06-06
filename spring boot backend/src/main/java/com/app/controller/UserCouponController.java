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

import com.app.model.UserCoupon;
import com.app.service.UserCouponService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/user_coupon")
public class UserCouponController {
	@Autowired 
	private UserCouponService userCouponService;
	
	@PostMapping("/add")
    public UserCoupon addUserCoupon(@RequestBody UserCoupon userCoupon) {
        return userCouponService.saveUserCoupon(userCoupon);
    }
	
	@GetMapping("/all")
    public List<UserCoupon> findAllUserCoupons() {
        return userCouponService.getUserCoupons();
    }

    @GetMapping("/{id}")
    public UserCoupon findUserCouponById(@PathVariable int id) {
        return userCouponService.getUserCouponById(id);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteUserCoupon(@PathVariable int id) {
        return userCouponService.deleteUserCoupon(id);
    }
    
    @PutMapping("/update/{id}")
    public UserCoupon updateUserCoupon(@RequestBody UserCoupon userCoupon) {
        return userCouponService.updateUserCoupon(userCoupon);
    }
}
