import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-mod-menu',
  templateUrl: './mod-menu.component.html',
  styleUrls: ['./mod-menu.component.css'],
  providers: [ MenuService
      ]
})

export class ModMenuComponent implements OnInit {
  menus: Menu[];
  constructor(private menu_service: MenuService) { }

  getListMenu() {
    this.menu_service.getListMenu()
      .subscribe(
      data => this.menus = data,
      error => console.log("Lỗi xảy ra ở HTTP service")
      );
  }
  ngOnInit() {
    this.getListMenu();
  }
}
