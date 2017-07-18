import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'profile-view-grid-item',
  templateUrl: './profile-view-grid-item.component.html',
  styleUrls: ['./profile-view-grid-item.component.css']
})
export class ProfileViewGridItemComponent implements OnInit {
@HostBinding('class') classes = 'grid-cell grid-cell--three-col grid-cell--gutters shadow--small';
  constructor() { }

  ngOnInit() {
  }

}
