package com.dgv.inventoryManagement.repositories;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dgv.inventoryManagement.entities.Reports;

@Repository
public interface ReportRepository extends JpaRepository<Reports,Integer>
{
	@Query(value="SELECT * FROM reports WHERE reportdate = CURDATE()",nativeQuery = true)
	Optional<Reports> getTodaysReport();
	
	@Query(value="SELECT * FROM reports WHERE reportdate>=?1 and reportdate<=?2 ",nativeQuery = true)
	List<Reports> getFilterdReports(Date start,Date end);
}
