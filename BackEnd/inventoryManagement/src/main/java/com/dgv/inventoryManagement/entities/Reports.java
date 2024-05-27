package com.dgv.inventoryManagement.entities;

import java.sql.Date;
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
public class Reports
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int reportId;
	@Column
	private Date reportdate;
	@Column
	private double totalSales;
	@Column
	private double totalPurches;
	@Column
	private double todaysEarned;
}
