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



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule 
  ],
  declarations: [ 
    AppComponent, AppComponent
    ],
    providers: [
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
