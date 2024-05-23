package com.dgv.inventoryManagement.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgv.inventoryManagement.entities.User;
import com.dgv.inventoryManagement.repositories.UserRepository;
import com.dgv.inventoryManagement.services.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository repository;
	@Override
	public User logIn(String username,String Password) throws Exception 
	{
		 User user=repository.findByUserNameAndPassword(username, Password).orElseThrow(()->new Exception("Wrong Credentials"));
		 return user;
	}

	@Override
	public void addUser(User user) 
	{
		repository.save(user);
	}

}
