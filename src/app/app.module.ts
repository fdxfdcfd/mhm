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



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, AppComponent, HomeComponent, WidFooterComponent, WidHeaderComponent, ModHeaderTopComponent, ModMenuComponent
    ],
    providers: [
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
