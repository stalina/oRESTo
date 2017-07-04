import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {FirebaseListObservable} from 'angularfire2/database';
import {OrderService} from '../order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  resto: string;

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.currentOrder.subscribe(orderContent => this.items = orderContent);
  }

}
