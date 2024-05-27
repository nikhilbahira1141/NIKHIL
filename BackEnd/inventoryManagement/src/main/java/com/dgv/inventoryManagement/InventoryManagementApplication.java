package com.dgv.inventoryManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EntityScan("com.dgv.inventoryManagement.*")
@ComponentScan(basePackages="com.dgv.inventoryManagement.*")
@EnableJpaRepositories(basePackages="com.dgv.inventoryManagement.*")
@SpringBootApplication
public class InventoryManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryManagementApplication.class, args);
	}
}
