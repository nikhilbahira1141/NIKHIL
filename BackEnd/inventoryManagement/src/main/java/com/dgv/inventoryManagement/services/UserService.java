package com.dgv.inventoryManagement.services;



import com.dgv.inventoryManagement.entities.User;

public interface UserService 
{
	public User logIn(String username,String password)throws Exception ;
	
	public void addUser(User user);
}
