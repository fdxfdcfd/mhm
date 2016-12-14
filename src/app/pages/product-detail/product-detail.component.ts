import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
//import { ProductService } from '../../services/service_product/service_product';

declare var jQuery: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });

    jQuery(function () {
      jQuery('#products').slides({
        preload: true,
        preloadImage: 'img/loading.gif',
        effect: 'slide, fade',
        crossfade: true,
        slideSpeed: 350,
        fadeSpeed: 500,
        generateNextPrev: true,
        generatePagination: false
      });
    });
  }

}
