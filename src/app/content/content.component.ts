import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  resto = 'app';
  items: FirebaseListObservable<any[]>;

  constructor(private _route: ActivatedRoute, private af: AngularFireDatabase) { }

  ngOnInit() {
    this.resto = this._route.snapshot.params['resto'];
    this.items = this.af.list('/resto/' + this.resto + '/dishes');
  }

}
