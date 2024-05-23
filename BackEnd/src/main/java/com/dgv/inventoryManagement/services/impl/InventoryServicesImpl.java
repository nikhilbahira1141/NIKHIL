package com.dgv.inventoryManagement.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgv.inventoryManagement.entities.Inventory;
import com.dgv.inventoryManagement.repositories.InventoryRepository;
import com.dgv.inventoryManagement.services.InventoryService;

@Service
public class InventoryServicesImpl implements InventoryService
{
	@Autowired
	private InventoryRepository repository;
	
	@Override
	public List<Inventory> getAllProduct()
	{
		return repository.findAll();
		
	}
	@Override
	public Inventory addProduct(Inventory inventory)
	{
		return repository.save(inventory);
	}
	@Override
	public String deleteProduct(int id) throws Exception
	{
		Optional<Inventory> product=repository.findById(id);
		
		if(product.isPresent())
		{
			repository.deleteById(id);
			return "Product Deleted Succesfully";
		}
		else
		{
			throw new Exception("Account dosen't Exists");
		}
	}
	@Override
	public Optional<Inventory> getProduct(int id)
	{
		return repository.findById(id);
	}
	
	@Override
	public Inventory updateProduct(Inventory product) 
	{
		Inventory updated=repository.save(product);
		return updated;
	}
	@Override
	public List<Inventory> getProductCatagory(String catagory) {
		List<Inventory> list=repository.getByCatagory(catagory);
		return list;
	}
	
}
