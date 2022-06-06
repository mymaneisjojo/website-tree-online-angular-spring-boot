package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.model.Rate;

@Repository
public interface RateRepo extends JpaRepository<Rate, Integer>{
	@Query(nativeQuery=true, value="SELECT * FROM rate r WHERE r.product_id = :productId")
	List<Rate> findRateByProductId(@Param("productId") int productId);
}
