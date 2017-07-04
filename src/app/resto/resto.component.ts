import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {OrderService} from '../order.service';


@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase,
              private _route: ActivatedRoute,
              private _orderService: OrderService) { }

  ngOnInit() {
    const resto = this._route.snapshot.params['resto'];
    this._orderService.initOrder(resto);
    this.items = this.af.list('/resto/' + resto + '/dishes');
  }

  addToOrder(item) {
    this._orderService.order(item);
  }

}
