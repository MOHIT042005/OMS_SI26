package com.os.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.os.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}