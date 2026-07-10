package com.os.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.os.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}