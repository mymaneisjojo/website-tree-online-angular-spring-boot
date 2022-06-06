package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Account;
import com.app.model.Customer;
import com.app.model.Customer;
import com.app.model.Customer;
import com.app.service.CustomerService;
import com.app.service.CustomerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/customer")
public class CustomerController {
	@Autowired 
	private CustomerService customerService;
	
	@GetMapping("/all")
    public List<Customer> getAllcustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/{id}")
    public Customer findcustomerById(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Customer> loginAccount(@RequestBody Customer customerData){
    	Customer customer = customerService.findByName(customerData.getName());
		
		if(customer.getPassword().equals(customerData.getPassword())) {
			return ResponseEntity.ok(customer);
		}
		return (ResponseEntity<Customer>) ResponseEntity.internalServerError();
	}
    
    
    @PostMapping("/register")
    public Customer addcustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable int id) {
        return customerService.deleteCustomer(id);
    }
	
    @PutMapping("/update/{id}")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }
    
}
