package com.app.repo;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Category;
import com.app.model.Product;
@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer>{
	Category findByName(String name);
	
//	 Page<Category> findPageAll(Pageable pageable);
}	
