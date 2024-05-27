package com.dgv.inventoryManagement.controllers;



import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dgv.inventoryManagement.entities.Reports;
import com.dgv.inventoryManagement.services.ReportService;

@RestController
@RequestMapping("/api/report")
@CrossOrigin("*")
public class ReportController 
{
	@Autowired
	private ReportService service;
	
	@GetMapping("/todaysReport")
	public ResponseEntity<Optional<Reports>> todaysReport()
	{
		try 
		{
			Optional<Reports> report=service.todaysReport();
			return new ResponseEntity<>(report,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/allReports")
	public ResponseEntity<List<Reports>> allReports()
	{
		try 
		{
			List<Reports> report=service.allReports();
			return new ResponseEntity<>(report,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/filterdReports/{startDate}/{endDate}")
	public ResponseEntity<List<Reports>> filterdReports(@PathVariable Date startDate,@PathVariable Date endDate)
	{
		try 
		{
			List<Reports> reports=service.filterdReports(startDate, endDate);
			return new ResponseEntity<>(reports,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
