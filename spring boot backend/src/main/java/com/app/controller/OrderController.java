package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Order;
import com.app.model.Order;
import com.app.service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/order")
public class OrderController {
	@Autowired 
	private OrderService orderService;
	
	@PostMapping("/add")
    public Order addOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    @GetMapping("/all")
    public List<Order> findAllOrders() {
        return orderService.getOrders();
    }
    
    @GetMapping("/{id}")
    public Order findOrderById(@PathVariable int id) {
        return orderService.getOrderById(id);
    }
    
    @PutMapping("/update/{id}")
    public Order updateOrder(@RequestBody Order order) {
        return orderService.updateOrder(order);
    }
}
