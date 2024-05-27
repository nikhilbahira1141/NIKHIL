package com.dgv.inventoryManagement.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dgv.inventoryManagement.entities.Orders;

@Repository
public interface OrdersRepository extends  JpaRepository<Orders,Integer> {

	List<Orders> findAllByOrderId(int id);
	
	@Query(value="select * from orders where user_user_id=?1",nativeQuery=true)
	List<Orders> findByUser(int userId);
}
