import { Component, OnInit } from '@angular/core';
import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-mod-header-slide',
  templateUrl: './mod-header-slide.component.html',
  styleUrls: ['./mod-header-slide.component.css'],
  animations: [
    trigger('slideState', [
      state('inactive', style({
        "opacity": 1,
        transform: 'translate(0)'
      })),
      state('active', style({
        "opacity": 0,
        transform: 'translate(-100%)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class ModHeaderSlideComponent implements OnInit {
  state = 'inactive';
  constructor() { }
  toggleState() {
    console.log(this.state);
    if (this.state == 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }
  ngOnInit() {

  }
}