package com.dgv.inventoryManagement.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dgv.inventoryManagement.entities.Inventory;
import com.dgv.inventoryManagement.services.InventoryService;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin("*")
public class InventoryController 
{
	@Autowired
	private InventoryService service;
	
	@GetMapping("/listProduct")
	public ResponseEntity<List<Inventory>> listAllProduct()
	{ 
		List<Inventory> products = service.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	@PostMapping("/addProduct")
	public ResponseEntity<Inventory> addProduct(@RequestBody Inventory inventory)
	{
		try
		{
			Inventory newProduct=service.addProduct(inventory);
			return new ResponseEntity<>(newProduct,HttpStatus.CREATED);
		}
		catch(Exception e)
		{
			return new ResponseEntity(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id)
	{
		try 
		{
			String result=service.deleteProduct(id);
			return new ResponseEntity<>(result,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getProduct/{id}")
	public ResponseEntity<Optional<Inventory>> getProduct(@PathVariable int id)
	{
		Optional<Inventory> product= service.getProduct(id);
		return new ResponseEntity<>(product, HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Inventory> updateProduct(@RequestBody Inventory product)
	{
		try 
		{
			Inventory result=service.updateProduct(product);
			return new ResponseEntity<>(result,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/list/{catagory}")
	public ResponseEntity<List<Inventory>> getProductByCatagory(@PathVariable String catagory)
	{
		List<Inventory> list=service.getProductCatagory(catagory);
		return new ResponseEntity<>(list,HttpStatus.OK) ;
	}
}
