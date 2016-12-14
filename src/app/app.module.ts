// core
import { NgModule, enableProdMode }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// app
enableProdMode();
// animate
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { WidFooterComponent } from './widgets/wid-footer/wid-footer.component';
import { WidHeaderComponent } from './widgets/wid-header/wid-header.component';
import { ModHeaderTopComponent } from './modules/mod-header-top/mod-header-top.component';
import { ModMenuComponent } from './modules/mod-menu/mod-menu.component';
import { ApacheLinkService } from './services/apache-link.service';
import { ModHeaderSlideComponent } from './modules/mod-header-slide/mod-header-slide.component';
import { ModCategoryProductComponent } from './modules/mod-category-product/mod-category-product.component';
import { ModGroupProductComponent } from './modules/mod-group-product/mod-group-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ModDetailProductComponent } from './modules/mod-detail-product/mod-detail-product.component';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, AppComponent, HomeComponent, WidFooterComponent, WidHeaderComponent, ModHeaderTopComponent, ModMenuComponent, ModHeaderSlideComponent, ModCategoryProductComponent, ModGroupProductComponent, ProductDetailComponent, ModDetailProductComponent
    ],
    providers: [ApacheLinkService
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
