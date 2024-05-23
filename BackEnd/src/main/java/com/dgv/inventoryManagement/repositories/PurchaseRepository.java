package com.dgv.inventoryManagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dgv.inventoryManagement.entities.Purchase;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase,Integer>{
}
