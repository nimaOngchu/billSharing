import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItems';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  constructor() { }

  themeColor = 'blue';
  themeClass = 'blue';
  navItems: NavItem[];
  navitems = [
    {
      icon: 'dashboard',
      displayName: 'dashboard'
    },
    {
      icon: 'assessment',
      displayName: 'recent activity'
    },
    {
      icon: 'attach_money',
      displayName: 'all expenses'
    }
  ];
  ngOnInit() {

  }

  changeTheme( themecolor) {

    if (themecolor === 'teal') {
      this.themeClass = 'teal-theme';

    } else if (themecolor === 'black') {
      this.themeClass = 'black-theme';
    } else if (themecolor === 'purple') {
      this.themeClass = 'purple-theme';
    } else {
      this.themeClass = 'blue-theme';
    }

  }

}
