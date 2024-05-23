package com.dgv.inventoryManagement.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgv.inventoryManagement.entities.Inventory;
import com.dgv.inventoryManagement.entities.Purchase;
import com.dgv.inventoryManagement.repositories.InventoryRepository;
import com.dgv.inventoryManagement.repositories.PurchaseRepository;
import com.dgv.inventoryManagement.services.PurchaseService;

@Service
public class PurchaseServiceImpl implements PurchaseService
{
	@Autowired
	private PurchaseRepository repository;
	@Autowired
	private InventoryRepository irepository;
	
	 public  void  fillStock(Purchase purchase)
	{
		 	repository.save(purchase);
			Optional<Inventory> product=irepository.findById(purchase.getProduct().getProductId());
			int newQuantity=product.get().getQuantity()+purchase.getQuantity();
			irepository.updateQuantity(product.get().getProductId(),newQuantity);
	}
	
	public List<Purchase> listPurchase()
	{
		return repository.findAll();
		
	}
}
