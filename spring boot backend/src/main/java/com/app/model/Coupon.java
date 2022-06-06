package com.app.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "coupon")
public class Coupon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int quantity;
	private int condition;
	private String code;
	private float number;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date start_date;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date end_date;
	
	@OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Order> lstOrder;
	@OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<UserCoupon> lstUserCoupon;
	
	public Coupon() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Coupon(int id, String name, int quantity, int condition, String code, float number, Date start_date,
			Date end_date) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.condition = condition;
		this.code = code;
		this.number = number;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getCondition() {
		return condition;
	}
	public void setCondition(int condition) {
		this.condition = condition;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Date getStart_date() {
		return start_date;
	}
	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}
	public Date getEnd_date() {
		return end_date;
	}
	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public float getNumber() {
		return number;
	}

	public void setNumber(float number) {
		this.number = number;
	}

	public List<Order> getLstOrder() {
		return lstOrder;
	}

	public void setLstOrder(List<Order> lstOrder) {
		this.lstOrder = lstOrder;
	}

	public List<UserCoupon> getLstUserCoupon() {
		return lstUserCoupon;
	}

	public void setLstUserCoupon(List<UserCoupon> lstUserCoupon) {
		this.lstUserCoupon = lstUserCoupon;
	}
	
	
	
}
