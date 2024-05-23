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

@Entity
@Data
@ToString
public class Orders 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int srNo;
	@Column
	private int orderId;
	@ManyToOne
	private User user;
	@Column
	private Date orderDate;
	@Column	
	private int quantity;
	@Column	
	private double ammount;
	@Column
	private double earned;
	@ManyToOne
    private Inventory inventory;
}
