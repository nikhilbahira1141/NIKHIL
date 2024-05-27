package com.dgv.inventoryManagement.services;

import java.util.List;

import com.dgv.inventoryManagement.entities.Orders;

public interface OrdersService 
{
	public Orders placeOrder(Orders order)throws Exception;
	public List<Orders> listOrders();
	public List<Orders> listByOrderId(int id);
	public List<Orders> listByUser(int userId);
}
