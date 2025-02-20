package com.dgv.inventoryManagement.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dgv.inventoryManagement.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

default Optional<User> findByUserNameAndPassword(String userName, String password) {
    return findAll().stream()
            .filter(user -> user.getUserName().equals(userName) && user.getPassword().equals(password))
            .findFirst();
}
}
