import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-phone-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.css']
})
export class PhoneDialogComponent {

  constructor(public dialogRef: MdDialogRef<PhoneDialogComponent>) {}


}
