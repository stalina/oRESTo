import { Routes } from '@angular/router';
import {RestoComponent} from './resto/resto.component';

export const routes: Routes = [
  { path: '',
    redirectTo: '/laplace',
    pathMatch: 'full'
  },
  { path: ':resto', component: RestoComponent }
];
