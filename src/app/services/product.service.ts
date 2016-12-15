import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { ApacheLinkService } from './apache-link.service';

@Injectable()
export class ProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private apachelink: ApacheLinkService) { }
  url_api = this.apachelink.getLinkApache() + "service_api/api_product.php";
  getListProduct() {
    return this.http.get(this.url_api).map(res => res.json());
  }
  getProductById(id) {
    let body = JSON.stringify({ "id": id });
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
  getProductByProductTypeLimit(product_type) {
    let body = JSON.stringify({ "product_type_limit": product_type });
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
  getProductByProductType(product_type) {
    let body = JSON.stringify({ "product_type": product_type });
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
  getProductByCondition(Condition) {
    let out = "{";
    for (let i in Condition) {
      if(Condition[i] != '')
      out += i + ": '" + Condition[i] + "',";
    }
    out += "condition: true";
    out += "}";
    let body = JSON.stringify(eval("(" + out + ")"));
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
}
