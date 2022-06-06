package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Account;
import com.app.repo.AccountRepo;

@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
	@Autowired
	private AccountRepo repo;
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Account> loginAccount(@RequestBody Account accountData){
		Account account = repo.findByName(accountData.getName());
		
		if(account.getPassword().equals(accountData.getPassword())) {
			return ResponseEntity.ok(account);
		}
		return (ResponseEntity<Account>) ResponseEntity.internalServerError();
	}
}