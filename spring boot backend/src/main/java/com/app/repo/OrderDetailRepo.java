package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.model.OrderDetail;
import com.app.model.Product;

@Repository
public interface OrderDetailRepo extends JpaRepository<OrderDetail, Integer>{
	 @Query(nativeQuery=true, value="SELECT * FROM order_details od WHERE od.order_id = :orderId")
		List<OrderDetail> findOrderDetailByOrderId(@Param("orderId") int orderId);
}
