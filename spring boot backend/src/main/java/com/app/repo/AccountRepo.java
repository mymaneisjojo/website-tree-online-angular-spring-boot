package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Account;

@Repository
public interface AccountRepo extends JpaRepository<Account, String>{
	
	Account findByName(String name);

}
