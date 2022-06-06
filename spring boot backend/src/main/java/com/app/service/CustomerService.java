package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Customer;
import com.app.model.Customer;
import com.app.model.Customer;
import com.app.repo.CustomerRepo;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo customerRepo;
	
	public List<Customer> getAllCustomers(){
		return customerRepo.findAll();
	}
	
	public Customer saveCustomer(Customer customer) {
		return customerRepo.save(customer);
	}

	public Customer findByName(String name) {
		return customerRepo.findByName(name);
	}
	
	public Customer findByEmail(String email) {
		return customerRepo.findByName(email);
	}

	public Customer getCustomerById(int id)  {
		return customerRepo.findById(id).orElse(null);
	}
	
	
	public String deleteCustomer(int id) {
		customerRepo.deleteById(id);
		return "customer removed !! " + id;
	}
	
	public Customer updateCustomer(Customer customer) {
		Customer existingCustomer = customerRepo.findById(customer.getId()).orElse(null);
        existingCustomer.setName(customer.getName());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setAddress(customer.getAddress());
        existingCustomer.setPassword(customer.getPassword());
        existingCustomer.setPhone(customer.getPhone());
        return customerRepo.save(existingCustomer);
    }
	
}
