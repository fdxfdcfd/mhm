import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-mod-detail-product',
  templateUrl: './mod-detail-product.component.html',
  providers: [ProductService],
  styleUrls: ['./mod-detail-product.component.css'],
})
export class ModDetailProductComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service_product: ProductService) {
    
  }

  getprouductdetail() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service_product.getProductById(id).subscribe(
        data => this.product = data.shift(), // put the data returned from the server in our variable
        error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
      );
    });
  }
  ngOnInit() {
    this.getprouductdetail();
  }
}
