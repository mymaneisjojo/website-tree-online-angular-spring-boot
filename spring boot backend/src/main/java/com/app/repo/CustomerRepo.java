package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	Customer findByName(String name);
	
	Customer findByEmail(String email);
	
}
