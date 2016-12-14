import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { ApacheLinkService } from './apache-link.service';

@Injectable()
export class ProductTypeService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private apachelink: ApacheLinkService) { }
  url_api = this.apachelink.getLinkApache() + "service_api/api_product_type.php";

  getListProductType() {
    return this.http.get(this.url_api).map(res => res.json());
  }
  getProductTypeById(product_type_id) {
    let body = JSON.stringify({ "product_type_id": product_type_id });
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }


}
