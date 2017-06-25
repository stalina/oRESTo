import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {HomeDialogComponent} from '../home-dialog/home-dialog.component'
import {PhoneDialogComponent} from '../phone-dialog/phone-dialog.component'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();

  constructor(public dialog: MdDialog) { }

  ngOnInit() {

  }

  openHome() {
    this.dialog.open(HomeDialogComponent);
  }
  openPhone() {
    this.dialog.open(PhoneDialogComponent);
  }
}
