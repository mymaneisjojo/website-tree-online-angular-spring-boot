package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Category;
import com.app.service.CategoryService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/category")
public class CategoryController {
	@Autowired 
	private CategoryService categoryService;
	
	@PostMapping("/add")
    public Category addCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

//    @PostMapping("/add-list")
//    public List<Category> addCategorys(@RequestBody List<Category> Categorys) {
//        return categoryService.saveCategorys(Categorys);
//    }

    @GetMapping("/all")
    public List<Category> findAllCategorys() {
        return categoryService.getCategorys();
    }

    @GetMapping("/{id}")
    public Category findCategoryById(@PathVariable int id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/findByName/{name}")
    public Category findCategoryByName(@PathVariable String name) {
        return categoryService.getCategoryByName(name);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteCategory(@PathVariable int id) {
        return categoryService.deleteCategory(id);
    }
    
    @PutMapping("/update/{id}")
    public Category updateCategory(@RequestBody Category category) {
        return categoryService.updateCategory(category);
    }
}
