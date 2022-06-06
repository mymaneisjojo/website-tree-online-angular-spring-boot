package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Category;
import com.app.model.Order;
import com.app.model.Order;
import com.app.repo.OrderRepo;
@Service
public class OrderService {
	@Autowired
	private OrderRepo orderRepo;
	
	
	public Order saveOrder(Order order) {
		return orderRepo.save(order);
	}
	
	public List<Order> getOrders() {
		return orderRepo.findAll();
	}
	
	public Order getOrderById(int id) {
		return orderRepo.findById(id).orElse(null);
	}
	
	
	public Order updateOrder(Order order) {
		Order existingOrder = orderRepo.findById(order.getId()).orElse(null);
		existingOrder.setName(order.getName());
		existingOrder.setAddress(order.getAddress());
		existingOrder.setEmail(order.getEmail());
		existingOrder.setPhone(order.getPhone());
		existingOrder.setNote(order.getNote());
        existingOrder.setStatus(1);
     
        return orderRepo.save(existingOrder);
    }
	
	
}
