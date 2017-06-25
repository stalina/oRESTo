import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  @ViewChild('restoHeader')
  restoHeader: ElementRef;

  constructor(private render: Renderer2) {

  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  shrink(event) {
    if (event) {
      event.preventDefault();
    }
    var distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 30;

    if (distanceY > shrinkOn) {
      this.render.addClass(this.restoHeader.nativeElement, 'smaller');
    } else {
      this.render.removeClass(this.restoHeader.nativeElement, 'smaller');
    }
  }

}
