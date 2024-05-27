package com.dgv.inventoryManagement.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.ToString;
@Data
@ToString
@Entity
public class Purchase 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int id;
	@Column
	private Date purchaseDate;
	@ManyToOne
    private User user;	
	@ManyToOne
    private Inventory product;
	@Column
	private int quantity;
	@Column
	private double costPrice;
}
