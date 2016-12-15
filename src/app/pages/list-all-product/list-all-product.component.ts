import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-all-product',
  templateUrl: './list-all-product.component.html',
  styleUrls: ['./list-all-product.component.css']
})
export class ListAllProductComponent implements OnInit {
  data: any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route
    .data
      .subscribe(v => this.data=v);
  }

}
