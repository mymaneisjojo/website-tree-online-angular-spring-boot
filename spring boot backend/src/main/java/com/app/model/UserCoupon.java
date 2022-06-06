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
@Table(name = "user_coupon")
public class UserCoupon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int status;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@CreationTimestamp
	private Date created_at;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "id")
	private Customer cus;

	@ManyToOne
	@JoinColumn(name = "coupon_id", referencedColumnName = "id")
	private Coupon cou;

	public UserCoupon() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserCoupon(int id, int status, Date created_at, Customer cus, Coupon cou) {
		super();
		this.id = id;
		this.status = status;
		this.created_at = created_at;
		this.cus = cus;
		this.cou = cou;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Customer getCus() {
		return cus;
	}

	public void setCus(Customer cus) {
		this.cus = cus;
	}

	public Coupon getCou() {
		return cou;
	}

	public void setCou(Coupon cou) {
		this.cou = cou;
	}

	
	
}
