import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
