package com.dgv.inventoryManagement.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Inventory 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int productId;
	@Column 
	private String category;
	@Column
	private String productName;
	@Column
	private String make;
	@Column
	private int quantity;
	@Column
	private double costPrice;
	@Column
	private double mrp;
	@Column 
	private String imageUrl;
}


