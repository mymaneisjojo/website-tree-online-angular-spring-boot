package com.app.repo;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.model.Product;
@Repository
@Transactional
public interface ProductRepo extends PagingAndSortingRepository<Product, Integer>{
	@Query("select p from Product p where p.name like %:name%")
	List<Product> findByName(@Param("name") String name);
	
	
	@Query(nativeQuery=true, value="SELECT TOP 4 * FROM Product p order by p.id ASC")
	List<Product> find4Product();
	
	@Query(nativeQuery=true, value="SELECT TOP 4 * FROM Product p order by p.id DESC")
	List<Product> find4ProductDESC();
	
	@Query(nativeQuery=true, value="SELECT TOP 4 * FROM Product p where p.sale_price > 0")
	List<Product> findProductSale();
	
	
	 @Query(nativeQuery=true, value="SELECT * FROM Product p WHERE p.category_id = :categoryId")
	List<Product> findProductByCategoryId(@Param("categoryId") int categoryId);
	 
	 @Query(nativeQuery=true, value="SELECT TOP 4 * FROM Product p WHERE p.category_id = :categoryId")
		List<Product> find3ProductByCategoryId(@Param("categoryId") int categoryId);
	 
	 Page<Product> findAll(Pageable pageable);

	 @Query(nativeQuery=true, value="SELECT * FROM Product p WHERE p.price BETWEEN :min and :max order by p.price ASC")
		List<Product> findProductByPrice(@Param("min") int min, @Param("max") int max);
		 
}
