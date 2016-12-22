import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductType } from '../../models/product-type';
import { ProductService } from '../../services/product.service';
import { ProductTypeService } from '../../services/product-type.service';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
declare var jQuery: any;

@Component({
  selector: 'app-mod-list-all-product',
  templateUrl: './mod-list-all-product.component.html',
  styleUrls: ['./mod-list-all-product.component.css'],
  providers: [ProductService, ProductTypeService],
  inputs: ['data']
})
export class ModListAllProductComponent implements OnInit {
  products: Product[];
  data = { 'category_id': '', 'product_type': '' };
  constructor(private service_product: ProductService, private router: Router, private service_product_type: ProductTypeService) { }
  getProductByCondition(Condition) {
    this.service_product.getProductByCondition(Condition)
      .subscribe(
      data => this.products = data,
      error => console.log("Lỗi xảy ra ở HTTP service"),
      );
  }
  ngOnInit() {
    this.getProductByCondition(this.data);
  }
  gotoDetail(product: Product): void {
    let link = ['/san-pham', product.id];
    this.router.navigate(link);
  }
}
