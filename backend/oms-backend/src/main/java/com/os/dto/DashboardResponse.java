package com.os.dto;

public class DashboardResponse {

    private long totalCategories;
    private long totalProducts;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalCategories, long totalProducts) {
        this.totalCategories = totalCategories;
        this.totalProducts = totalProducts;
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
}