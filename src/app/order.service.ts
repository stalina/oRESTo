
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class OrderService {

  public client: BehaviorSubject<firebase.User> = new BehaviorSubject<firebase.User>(null);
  public currentOrder: BehaviorSubject<FirebaseListObservable<any[]>> = new BehaviorSubject<FirebaseListObservable<any[]>>(null);
  resto: string;

  constructor(private af: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(
      (auth: firebase.User) => {
        if (auth != null) {
          this.client.next(auth);
          if (this.resto) {
            this.initOrder(this.resto);
          }
        }
      });
  }

  order(item: any) {
    this.currentOrder.getValue().push(item);
  }

  initOrder(resto: string) {
    this.resto = resto;
    if (this.client.getValue() != null) {
      this.currentOrder.next(this.af.list('/resto/' + this.resto
        + '/client/' + this.client.getValue().uid
        + '/order/'));
    } else {
      this.login();
    }
  }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
