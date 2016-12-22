import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { ApacheLinkService } from './apache-link.service';

@Injectable()
export class CategoryProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private apachelink: ApacheLinkService) { }
  url_api = this.apachelink.getLinkApache() + "service_api/api_category.php";

  getCategoryProductList() {
    return this.http.get(this.url_api).map(res => res.json());
  }
  getCategoryProductCondition(condition){
    let out = "{";
    for (let i in condition) {
      if(condition[i] != '')
      out += i + ": '" + condition[i] + "',";
    }
    out += "condition: true";
    out += "}";
    let body = JSON.stringify(eval("(" + out + ")"));
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
  getCategoryProductByLink(link) {
    let body = JSON.stringify({ "link": link });
    let option = new RequestOptions({ method: "post" });
    return this.http.post(this.url_api, body, option).map(res => res.json());
  }
}
