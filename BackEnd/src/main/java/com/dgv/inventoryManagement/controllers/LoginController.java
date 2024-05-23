package com.dgv.inventoryManagement.controllers;

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

import com.dgv.inventoryManagement.entities.User;
import com.dgv.inventoryManagement.services.UserService;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController 
{
	@Autowired
	private UserService service;
	@GetMapping("/{username}/{password}")
	public ResponseEntity<User> login(@PathVariable String username,@PathVariable String password )
	{
		try {
			User user=service.logIn(username, password);
			return new ResponseEntity<>(user,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/register")
	public ResponseEntity<String> userRegister(@RequestBody User user)
	{
		service.addUser(user);
		return new ResponseEntity<>("User Registered ",HttpStatus.OK);
		
	}
}
