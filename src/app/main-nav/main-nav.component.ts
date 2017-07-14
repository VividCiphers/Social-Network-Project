import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  toggleDropdown() {
    document.getElementById('main-nav__dropdown').classList.toggle('main-nav__dropdown-content--show');
  }

  ngOnInit() {
  }

}
