package com.app.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int quantity;
	private String description;
	private String image;
	private float price;
	private float sale_price;
	private int status;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	 @CreationTimestamp
	private Date created_at;
	
	@ManyToOne
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category cat;
	
	@OneToMany(mappedBy = "id")
	@JsonIgnore
	private List<OrderDetail> lstOrdDetail;
	
	@OneToMany(mappedBy = "id")
	@JsonIgnore
	private List<Rate> lstRate;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Product(int id, String name, int quantity, String description, String image, float price, float sale_price,
			int status,Date created_at, Category cat) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.description = description;
		this.image = image;
		this.price = price;
		this.sale_price = sale_price;
		this.status = status;
		this.created_at = created_at;
		this.cat = cat;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	

	public float getSale_price() {
		return sale_price;
	}


	public void setSale_price(float sale_price) {
		this.sale_price = sale_price;
	}


	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Category getCat() {
		return cat;
	}

	public void setCat(Category cat) {
		this.cat = cat;
	}


	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}

	public Date getCreated_at() {
		return created_at;

	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	


	
}
