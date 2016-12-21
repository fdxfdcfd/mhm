import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CategoryProductService } from '../services/category-product.service';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

@Injectable()
export class AboutResolveService implements Resolve<any>{

  constructor(private service: CategoryProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return Observable.create(observer => { {
        observer.next(this.service.getCategoryProductList())
        observer.complete();
      }
    });

}
}
