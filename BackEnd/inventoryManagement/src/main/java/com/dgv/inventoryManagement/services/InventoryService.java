package com.dgv.inventoryManagement.services;

import java.util.List;
import java.util.Optional;

import com.dgv.inventoryManagement.entities.Inventory;

public interface InventoryService 
{
	public List<Inventory> getAllProduct();
	public Inventory addProduct(Inventory inventory);
	public String deleteProduct(int id)throws Exception;
	public Optional<Inventory> getProduct(int id);
	public Inventory updateProduct(Inventory product);
	public List<Inventory> getProductCatagory(String catagory);
}
