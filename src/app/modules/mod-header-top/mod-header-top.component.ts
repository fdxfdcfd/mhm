import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-mod-header-top',
  templateUrl: './mod-header-top.component.html',
  styleUrls: ['./mod-header-top.component.css']
})
export class ModHeaderTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						jQuery(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

				var dd = new DropDown( jQuery('#dd') );

				jQuery(document).click(function() {
					// all dropdowns
					jQuery('.wrapper-dropdown-2').removeClass('active');
				});
  }

}
