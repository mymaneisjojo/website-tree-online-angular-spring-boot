package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.OrderDetail;
import com.app.model.Product;
import com.app.model.OrderDetail;
import com.app.repo.OrderDetailRepo;

@Service
public class OrderDetailService {
	@Autowired
	private OrderDetailRepo orderDetailRepo;
	
	
	public OrderDetail saveOrderDetail(OrderDetail orderDetail) {
		return orderDetailRepo.save(orderDetail);
	}
	
	public List<OrderDetail> getOrderDetails() {
		return orderDetailRepo.findAll();
	}
	
	public OrderDetail getOrderDetailById(int id) {
		return orderDetailRepo.findById(id).orElse(null);
	}
	
	public List<OrderDetail> findOrderDetailByOrderId(int orderId) {
		return orderDetailRepo.findOrderDetailByOrderId(orderId);
	}

}
