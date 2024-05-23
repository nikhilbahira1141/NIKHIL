package com.dgv.inventoryManagement.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgv.inventoryManagement.entities.Inventory;
import com.dgv.inventoryManagement.entities.Orders;
import com.dgv.inventoryManagement.repositories.InventoryRepository;
import com.dgv.inventoryManagement.repositories.OrdersRepository;
import com.dgv.inventoryManagement.services.OrdersService;

@Service
public class OrdersServiceImpl implements OrdersService
{
	@Autowired
	private OrdersRepository repository;
	
	@Autowired 
	private InventoryRepository irepositiry;
	
	public Orders placeOrder(Orders order) throws Exception
	{
		Orders saved=repository.save(order);
		int pId=order.getInventory().getProductId();
		Optional<Inventory> product=irepositiry.findById(pId);
		int newQuantity=product.get().getQuantity()-order.getQuantity();
		if(newQuantity<0)
		{
			throw new Exception("Insufficent Stocks");
		}
		irepositiry.updateQuantity(pId,newQuantity);
		return saved;
		
	}
	
	public List<Orders> listOrders()
	{
		return repository.findAll();
		
	}

	@Override
	public List<Orders> listByOrderId(int id) {
		
		return repository.findAllByOrderId(id);
	}

	@Override
	public List<Orders> listByUser(int userId) {
		
		return repository.findByUser(userId);
	}
}
