import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryProduct } from '../../models/category-product';
import { CategoryProductService } from '../../services/category-product.service';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-mod-route-category',
  templateUrl: './mod-route-category.component.html',
  styleUrls: ['./mod-route-category.component.css'],
  providers: [CategoryProductService]
})
export class ModRouteCategoryComponent implements OnInit {
  categories: CategoryProduct[];
  route_category: string;
  cate:any;
  t:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service_category: CategoryProductService
    ) {
    }
  ngOnInit() {
    this.cate= this.route.snapshot.data['category'];
    this.cate.subscribe(
      data => this.categories = data,
      error => console.log("Lỗi xảy ra ở HTTP service"),
      ()=> console.log(this.t)
      );
      console.log(this.route.snapshot.data['category']);
  }

}
