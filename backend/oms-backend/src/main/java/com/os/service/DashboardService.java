package com.os.service;

import org.springframework.stereotype.Service;

import com.os.dto.DashboardResponse;
import com.os.repository.CategoryRepository;
import com.os.repository.ProductRepository;
import com.os.repository.CustomerRepository;
import com.os.repository.OrderRepository;

@Service
public class DashboardService {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    public DashboardService(CategoryRepository categoryRepository,
                            ProductRepository productRepository,
                            CustomerRepository customerRepository,
                            OrderRepository orderRepository) {

        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    public DashboardResponse getDashboardData() {

        long categories = categoryRepository.count();
        long products = productRepository.count();
        long customers = customerRepository.count();
        long orders = orderRepository.count();

        return new DashboardResponse(
                categories,
                products,
                customers,
                orders
        );
    }
}