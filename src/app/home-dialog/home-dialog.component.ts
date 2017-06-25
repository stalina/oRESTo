import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.css']
})
export class HomeDialogComponent {

  constructor(public dialogRef: MdDialogRef<HomeDialogComponent>) {}


}
