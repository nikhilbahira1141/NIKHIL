package com.dgv.inventoryManagement.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dgv.inventoryManagement.entities.Reports;

@Repository
public interface ReportRepository extends JpaRepository<Reports,Integer>
{
	@Query(value="SELECT * FROM reports WHERE reportdate = CURDATE()", nativeQuery = true)
	Optional<Reports> getTodaysReport();

}
