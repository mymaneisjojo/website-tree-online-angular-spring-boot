package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.OrderDetail;
import com.app.model.Product;
import com.app.model.OrderDetail;
import com.app.service.OrderDetailService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/order-detail")
public class OrderDetailController {
	@Autowired 
	private OrderDetailService orderDetailService;
	
	@PostMapping("/add")
    public OrderDetail addOrderDetail(@RequestBody OrderDetail orderDetail) {
        return orderDetailService.saveOrderDetail(orderDetail);
    }

    @GetMapping("/all")
    public List<OrderDetail> findAllOrderDetails() {
        return orderDetailService.getOrderDetails();
    }
    
    @GetMapping("/{id}")
    public OrderDetail findOrderDetailById(@PathVariable int id) {
        return orderDetailService.getOrderDetailById(id);
    }
    
    @GetMapping("/getOrderDetailByOrder/{orderId}")
    public List<OrderDetail> findOrderDetailByOrderId(@PathVariable("orderId") int orderId) {
        return orderDetailService.findOrderDetailByOrderId(orderId);
        
    }
}
