package com.dgv.inventoryManagement.services;

import java.util.Optional;

import com.dgv.inventoryManagement.entities.User;

public interface UserService 
{
	public User logIn(String username,String Password)throws Exception ;
	
	public void addUser(User user);
}
