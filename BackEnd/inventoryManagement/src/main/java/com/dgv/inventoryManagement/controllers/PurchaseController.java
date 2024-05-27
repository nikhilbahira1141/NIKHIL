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

import com.dgv.inventoryManagement.entities.Purchase;
import com.dgv.inventoryManagement.services.PurchaseService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/purchase")
@CrossOrigin("*")
@Slf4j
public class PurchaseController 
{
	@Autowired
	private PurchaseService service;
	
	@PostMapping("/fillStocks")
	public ResponseEntity<Purchase> fillStock(@RequestBody Purchase purchase)
	{
		log.info("Stock Added");
			service.fillStock(purchase);
			return new ResponseEntity<>(purchase,HttpStatus.OK);
		
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<Purchase>> listPurchase()
	{
		try 
		{
			List<Purchase> purchase=service.listPurchase();
			return new ResponseEntity<>(purchase,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
