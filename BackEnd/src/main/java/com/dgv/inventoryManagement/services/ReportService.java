package com.dgv.inventoryManagement.services;

import java.util.List;
import java.util.Optional;

import com.dgv.inventoryManagement.entities.Reports;

public interface ReportService
{
	public Optional<Reports> todaysReport();
	public List<Reports> allReports();
}
