package com.os.dto;

public class DashboardResponse {

    private long totalCategories;
    private long totalProducts;
    private long totalCustomers;
    private long totalOrders;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalCategories, long totalProducts,
                             long totalCustomers, long totalOrders) {
        this.totalCategories = totalCategories;
        this.totalProducts = totalProducts;
        this.totalCustomers = totalCustomers;
        this.totalOrders = totalOrders;
    }

    public long getTotalCategories() {
        return totalCategories;
    }

    public void setTotalCategories(long totalCategories) {
        this.totalCategories = totalCategories;
    }

    public long getTotalProducts() {
        return totalProducts;
    }

    public void setTotalProducts(long totalProducts) {
        this.totalProducts = totalProducts;
    }

    public long getTotalCustomers() {
        return totalCustomers;
    }

    public void setTotalCustomers(long totalCustomers) {
        this.totalCustomers = totalCustomers;
    }

    public long getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(long totalOrders) {
        this.totalOrders = totalOrders;
    }
}