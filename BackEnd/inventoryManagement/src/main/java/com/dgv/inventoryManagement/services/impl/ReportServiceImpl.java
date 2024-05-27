package com.dgv.inventoryManagement.services.impl;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgv.inventoryManagement.entities.Reports;
import com.dgv.inventoryManagement.repositories.ReportRepository;
import com.dgv.inventoryManagement.services.ReportService;

@Service
public class ReportServiceImpl implements ReportService
{
	@Autowired
	private ReportRepository repository;
	
	public Optional<Reports> todaysReport()
	{
		return repository.getTodaysReport();
	}

	@Override
	public List<Reports> allReports() 
	{
		return repository.findAll();
	}

	@Override
	public List<Reports> filterdReports(Date start, Date end) {
		return repository.getFilterdReports(start, end);
	}
}
