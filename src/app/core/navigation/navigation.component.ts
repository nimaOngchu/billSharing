import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItems';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  localStorageKey = 'theme';
  constructor() {}

  ngOnInit() {

  }

  getTheme(): string {
    return localStorage.getItem(this.localStorageKey);
  }
  changeTheme(event) {
    localStorage.setItem(this.localStorageKey, event);
  }
}
