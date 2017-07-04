import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {OrderService} from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('restoHeader')
  restoHeader: ElementRef;

  resto = 'app';
  user: firebase.User;
  private _shouldGoToCart = false;

  constructor(private _orderService: OrderService,
              private _router: Router,
              private _render: Renderer2) {
    _orderService.client.subscribe(client => {
      if (client && this._shouldGoToCart) {
        this.goToCart(client.uid);
      }
    });
  }



  @HostListener('window:scroll', ['$event'])
  shrink(event) {
    if (event) {
      event.preventDefault();
    }
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 30;

    if (distanceY > shrinkOn) {
      this._render.addClass(this.restoHeader.nativeElement, 'smaller');
    } else {
      this._render.removeClass(this.restoHeader.nativeElement, 'smaller');
    }
  }

  logToCart() {
    if (this._orderService.client.getValue() == null) {
      this.loginThenGoToCart()
    }else {
      this.goToCart(this._orderService.client.getValue().uid);
    }
  }

  goToCart(clientUid){
    this._router.navigate([this.resto + '/cart', clientUid]);
    this._shouldGoToCart = false;
  }

  loginThenGoToCart() {
    this._shouldGoToCart = true;
    this._orderService.login()
  }


  logout() {
    this._orderService.logout()
  }
}
