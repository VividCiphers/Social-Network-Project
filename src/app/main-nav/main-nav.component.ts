import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  @ViewChild('mainNavDropDown') mainNavDropDown: ElementRef;
  private isOpen: Boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  toggleDropdown() {
    if (!this.isOpen) {
      this.renderer.addClass(this.mainNavDropDown.nativeElement, 'main-nav__dropdown-content--show');
    } else {
      this.renderer.removeClass(this.mainNavDropDown.nativeElement, 'main-nav__dropdown-content--show');
    }

    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }
}
