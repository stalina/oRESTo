import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ActivatedRoute, Params} from '@angular/router';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  @ViewChild('restoHeader')
  restoHeader: ElementRef;

  resto = 'app';
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private _route: ActivatedRoute, private render : Renderer2) {

  }

  ngOnInit() {
    this.resto = this._route.snapshot.params['resto'];
    this.items = this.af.list('/resto/'+this.resto+'/dishes');
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
