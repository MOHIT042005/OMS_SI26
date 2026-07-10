import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    productName: '',
    description: '',
    price: 0,
    gst: 0,
    stock: 0,
    category: {
      id: 0
    }
  };

  products: any[] = [];
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.product = {
        productName: '',
        description: '',
        price: 0,
        gst: 0,
        stock: 0,
        category: {
          id: 0
        }
      };
      this.loadProducts();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

}