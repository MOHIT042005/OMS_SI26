package com.os.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.os.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}