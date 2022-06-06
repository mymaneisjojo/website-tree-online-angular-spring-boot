package com.app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="rate")
public class Rate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String description;
	private int star;
	private int status;
	 @CreationTimestamp
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	
	private Date created_at;
	@ManyToOne
	@JoinColumn(name = "product_id", referencedColumnName = "id")
	private Product pro;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "id")
	private Customer cus;

	public Rate() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	


	public Rate(int id, String description, int star, int status, Date created_at, Product pro, Customer cus) {
		super();
		this.id = id;
		this.description = description;
		this.star = star;
		this.status = status;
		this.created_at = created_at;
		this.pro = pro;
		this.cus = cus;
	}






	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStar() {
		return star;
	}

	public void setStar(int star) {
		this.star = star;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Product getPro() {
		return pro;
	}

	public void setPro(Product pro) {
		this.pro = pro;
	}

	public Customer getCus() {
		return cus;
	}

	public void setCus(Customer cus) {
		this.cus = cus;
	}


	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}



}
