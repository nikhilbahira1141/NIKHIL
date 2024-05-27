package com.dgv.inventoryManagement.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dgv.inventoryManagement.entities.Inventory;


@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Integer>
{
	@Modifying
	@Transactional
	@Query(value = "UPDATE inventory SET quantity = ?2 WHERE product_id = ?1", nativeQuery = true)
    void updateQuantity(int id, int quantity);
	
	@Query(value="select * from inventory where category=?1",nativeQuery=true)
	List<Inventory> getByCatagory(String catagory);
}
