package com.app.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String phone;
	private String address;
	private String note;
	private int status;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	 @CreationTimestamp
	private Date created_at;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "id")
	private Customer cus;
	
	@ManyToOne
	@JoinColumn(name = "coupon_id", referencedColumnName = "id", nullable = true)
	private Coupon cou;
	
	@OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<OrderDetail> lstOrdDetail;

	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	


	public int getId() {
		return id;
	}


	
	
	public Order(int id, String name, String email, String phone, String address, String note, int status,
			Date created_at, Customer cus, Coupon cou) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.note = note;
		this.status = status;
		this.created_at = created_at;
		this.cus = cus;
		this.cou = cou;
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




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getPhone() {
		return phone;
	}




	public void setPhone(String phone) {
		this.phone = phone;
	}




	public String getAddress() {
		return address;
	}

	
	



	public void setAddress(String address) {
		this.address = address;
	}




	public List<OrderDetail> getLstOrdDetail() {
		return lstOrdDetail;
	}




	public void setLstOrdDetail(List<OrderDetail> lstOrdDetail) {
		this.lstOrdDetail = lstOrdDetail;
	}




	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Customer getCus() {
		return cus;
	}

	public void setCus(Customer cus) {
		this.cus = cus;
	}



	public int getStatus() {
		return status;
	}



	public void setStatus(int status) {
		this.status = status;
	}



	public Coupon getCou() {
		return cou;
	}



	public void setCou(Coupon cou) {
		this.cou = cou;
	}



	public Date getCreated_at() {
		return created_at;
	}



	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	
	
	
	
	
}
