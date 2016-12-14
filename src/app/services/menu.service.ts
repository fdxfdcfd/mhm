import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Injectable()
export class MenuService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    url_api = "/muahangmy/app/service_api/api_menu.php";

    constructor(private http: Http) { }

    getListMenu() {
        return this.http.get(this.url_api).map(res => res.json());
    }


}