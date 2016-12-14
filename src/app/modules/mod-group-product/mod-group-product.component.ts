import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductType } from '../../models/product-type';
import { ProductService } from '../../services/product.service';
import { ProductTypeService } from '../../services/product-type.service';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-mod-group-product',
  templateUrl: './mod-group-product.component.html',
  styleUrls: ['./mod-group-product.component.css'],
  providers: [ProductService, ProductTypeService],
  inputs: ['product_type']
})
export class ModGroupProductComponent implements OnInit {
  product_type = 1;
  errorMessage: string;
  products: Product[];
  product_type_item: ProductType;

  constructor(private service_product: ProductService, private router: Router, private service_product_type: ProductTypeService) { }
  getProductByProductTypeLimit(product_type) {
    this.service_product.getProductByProductTypeLimit(product_type)
      .subscribe(
      data => this.products = data,
      error => console.log("Lỗi xảy ra ở HTTP service")
      );
  }
  getProductTypeById(product_type_id) {
    this.service_product_type.getProductTypeById(product_type_id)
      .subscribe(
      data => this.product_type_item = data.shift(),
      error => console.log("Lỗi xảy ra ở HTTP service"),
      );
  }
  ngOnInit() {
    this.getProductByProductTypeLimit(this.product_type);
    this.getProductTypeById(this.product_type);
  }


  gotoDetail(product: Product): void {
    let link = ['/san-pham', product.id];
    this.router.navigate(link);
  }
}
