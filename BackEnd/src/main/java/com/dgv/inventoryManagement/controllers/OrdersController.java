package com.dgv.inventoryManagement.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dgv.inventoryManagement.entities.Orders;
import com.dgv.inventoryManagement.services.OrdersService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrdersController 
{
	@Autowired
	private OrdersService service;
	
	@PostMapping("/placeorder")
	public ResponseEntity<String> placeOrder(@RequestBody Orders order)
	{
		try 
		{
			service.placeOrder(order);
			return new ResponseEntity<>("Order Placed",HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<Orders>> listOrders()
	{
		try 
		{
			List<Orders> orders=service.listOrders();
			return new ResponseEntity<>(orders,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/ordersbyid/{id}")
	public ResponseEntity<List<Orders>> getByOrderId(@PathVariable int id)
	{
		List<Orders> orders=service.listByOrderId(id);
		return new ResponseEntity<>(orders,HttpStatus.OK);
		
	}
	
	@GetMapping("/allorder/{userId}")
	public ResponseEntity<List<Orders>> getOrdersByUser(@PathVariable int userId)
	{
		List<Orders> orders=service.listByUser(userId);
		return new ResponseEntity<>(orders,HttpStatus.OK);
		
	}
}
