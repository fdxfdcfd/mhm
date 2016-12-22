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
  categories: CategoryProduct;
  route_category: string;
  data = { 'category_id': '', 'product_type': '' };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service_category: CategoryProductService
  ) { }
  getCategoryProductCondition() {
    this.route.params.forEach((params: Params) => {
      let link = params['category'];
      this.service_category.getCategoryProductByLink(link)
        .subscribe(
        data => this.categories = data.shift(),
        error => console.log("Lỗi xảy ra ở HTTP service"),
        () => {
          if (this.categories) {
            this.data = { 'category_id': this.categories.category_id.toString(), 'product_type': '' };
          } else {
            let link = ['/404'];
            this.router.navigate(link);
          }
        }
        );

    });

  }
  ngOnInit() {
    this.getCategoryProductCondition();
  }

}
