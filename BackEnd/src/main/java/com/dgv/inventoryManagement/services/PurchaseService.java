package com.dgv.inventoryManagement.services;

import java.util.List;

import com.dgv.inventoryManagement.entities.Purchase;

public interface PurchaseService 
{
	public void fillStock(Purchase purchase);
	public List<Purchase> listPurchase();

}
