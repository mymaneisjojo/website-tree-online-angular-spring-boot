package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.app.model.Category;
import com.app.model.Product;
import com.app.model.Category;
import com.app.repo.CategoryRepo;
@Service
public class CategoryService {
	@Autowired
	private CategoryRepo categoryRepo;

	public Category saveCategory(Category category) {
		return categoryRepo.save(category);
	}


	public List<Category> getCategorys() {
		return  categoryRepo.findAll();
	}
	
	public Category getCategoryById(int id) {
		return categoryRepo.findById(id).orElse(null);
	}

	public Category getCategoryByName(String name) {
		return categoryRepo.findByName(name);
	}

	public String deleteCategory(int id) {
		categoryRepo.deleteById(id);
		return "Category removed !! " + id;
	}
	
	public Category updateCategory(Category category) {
		Category existingCategory = categoryRepo.findById(category.getId()).orElse(null);
        existingCategory.setName(category.getName());
        existingCategory.setDescription(category.getDescription());
        existingCategory.setStatus(category.getStatus());
        return categoryRepo.save(existingCategory);
    }
}
