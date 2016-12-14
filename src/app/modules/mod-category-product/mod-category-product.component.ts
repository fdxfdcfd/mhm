import { Component, OnInit } from '@angular/core';
import { CategoryProduct } from '../../models/category-product';
import { CategoryProductService } from '../../services/category-product.service';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-mod-category-product',
  templateUrl: './mod-category-product.component.html',
  styleUrls: ['./mod-category-product.component.css'],
  providers: [CategoryProductService]
})
export class ModCategoryProductComponent implements OnInit {
  categories: CategoryProduct[];
  constructor(private service_category: CategoryProductService) { }
  getCategoryProductList() {
    this.service_category.getCategoryProductList()
      .subscribe(
      data => this.categories = data,
      error => console.log("Lỗi xảy ra ở HTTP service")
      );
  }
  ngOnInit() {
    this.getCategoryProductList();
  }
}