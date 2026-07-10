import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  customers: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  saveCustomer() {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.customer = {
        name: '',
        email: '',
        phone: '',
        address: ''
      };
      this.loadCustomers();
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }

}