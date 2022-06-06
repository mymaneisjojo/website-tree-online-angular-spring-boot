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
@Table(name="order_details")
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int quantity;
	private int price;
	
	
	@ManyToOne
	@JoinColumn(name = "product_id", referencedColumnName = "id")
	private Product pro;
	
	@ManyToOne
	@JoinColumn(name = "order_id", referencedColumnName = "id")
	private Order ord;

	public OrderDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public OrderDetail(int id, int quantity, int price, Product pro, Order ord) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.price = price;
		
		this.pro = pro;
		this.ord = ord;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	

	public Product getPro() {
		return pro;
	}

	public void setPro(Product pro) {
		this.pro = pro;
	}

	public Order getOrd() {
		return ord;
	}

	public void setOrd(Order ord) {
		this.ord = ord;
	}



}
