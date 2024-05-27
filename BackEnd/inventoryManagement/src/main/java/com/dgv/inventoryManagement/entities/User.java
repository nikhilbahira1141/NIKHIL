package com.dgv.inventoryManagement.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class User
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int userId;
	@Column
	private String userName;
	@Column
	private String password;
	@Column
	private String role;
}
