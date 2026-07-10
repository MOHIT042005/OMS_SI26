package com.os.service;

import org.springframework.stereotype.Service;

import com.os.dto.DashboardResponse;
import com.os.repository.CategoryRepository;
import com.os.repository.ProductRepository;

@Service
public class DashboardService {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    public DashboardService(CategoryRepository categoryRepository,
                            ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    public DashboardResponse getDashboardData() {

        long categories = categoryRepository.count();
        long products = productRepository.count();

        return new DashboardResponse(categories, products);

    }
}