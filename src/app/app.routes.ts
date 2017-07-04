import { Routes } from '@angular/router';
import {RestoComponent} from './resto/resto.component';
import {CartComponent} from './cart/cart.component';

export const routes: Routes = [
  { path: '',
    redirectTo: '/laplace',
    pathMatch: 'full'
  },
  { path: ':resto', component: RestoComponent },
  { path: ':resto/cart/:iud', component: CartComponent }
];
