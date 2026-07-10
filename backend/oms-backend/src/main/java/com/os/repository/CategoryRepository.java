package com.os.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.os.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}