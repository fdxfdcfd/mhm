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
}
