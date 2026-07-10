import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order = {
    customer: {
      id: 0
    },
    product: {
      id: 0
    },
    quantity: 1
  };

  customers: any[] = [];
  products: any[] = [];
  orders: any[] = [];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
    this.loadProducts();
    this.loadOrders();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  saveOrder() {
    this.orderService.addOrder(this.order).subscribe(() => {
      this.order = {
        customer: { id: 0 },
        product: { id: 0 },
        quantity: 1
      };
      this.loadOrders();
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }

}