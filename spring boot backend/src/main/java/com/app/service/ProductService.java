package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.app.model.Product;
import com.app.model.Category;
import com.app.model.Product;
import com.app.repo.ProductRepo;

@Service
public class ProductService {
	@Autowired
	private ProductRepo productRepo;
	
	
	public Product saveProduct(Product product) {
		return productRepo.save(product);
	}
	
	public List<Product> get4Products() {
		return (List<Product>) productRepo.find4Product();
	}
	
	public List<Product> get4ProductsDESC() {
		return (List<Product>) productRepo.find4ProductDESC();
	}
	
	public List<Product> getProductsSale() {
		return (List<Product>) productRepo.findProductSale();
	}
	
	public Page<Product> getProduct(int pageNo, int pageSize){
		Pageable paging = PageRequest.of(pageNo, pageSize);
		return productRepo.findAll(paging);
	}
	
	public Product getProductById(int id) {
		return productRepo.findById(id).orElse(null);
	}
	
	public List<Product> getProductByCategoryId(int categoryId) {
		return productRepo.findProductByCategoryId(categoryId);
	}
	
	public List<Product> get3ProductByCategoryId(int categoryId) {
		return productRepo.find3ProductByCategoryId(categoryId);
	}


	public List<Product> getProductByName(String name) {
		return productRepo.findByName(name);
	}
	

	public String deleteProduct(int id) {
		productRepo.deleteById(id);
		return "Product removed !! " + id;
	}
	
	public Product updateProduct(Product product) {
		Product existingProduct = productRepo.findById(product.getId()).orElse(null);
        existingProduct.setName(product.getName());
        existingProduct.setQuantity(product.getQuantity());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setSale_price(product.getSale_price());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setStatus(product.getStatus());
        existingProduct.setImage(product.getImage());
        existingProduct.setCat(product.getCat());

        return productRepo.save(existingProduct);
    }
	
	
	public List<Product> findByPriceBetween(int min, int max){
		return productRepo.findProductByPrice(min, max);
	}

}
