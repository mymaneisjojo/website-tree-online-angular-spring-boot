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

import com.app.model.Coupon;
import com.app.service.CouponService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/coupon")
public class CouponController {
	@Autowired 
	private CouponService couponService;
	
	@PostMapping("/add")
    public Coupon addCoupon(@RequestBody Coupon coupon) {
        return couponService.saveCoupon(coupon);
    }

    @GetMapping("/all")
    public List<Coupon> findAllCoupons() {
        return couponService.getCoupons();
    }

    @GetMapping("/{id}")
    public Coupon findCouponById(@PathVariable int id) {
        return couponService.getCouponById(id);
    }

    @GetMapping("/findByCode/{code}")
    public Coupon findCouponByName(@PathVariable String code) {
        return couponService.getCouponByCode(code);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteCoupon(@PathVariable int id) {
        return couponService.deleteCoupon(id);
    }
    
    @PutMapping("/update/{id}")
    public Coupon updateCoupon(@RequestBody Coupon coupon) {
        return couponService.updateCoupon(coupon);
    }
}
