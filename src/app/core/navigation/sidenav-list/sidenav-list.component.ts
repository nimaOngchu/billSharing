import { Component, OnInit } from '@angular/core';
import { SidenavList } from './sidenavList';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  navItems: SidenavList[];
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
  constructor() { }

  ngOnInit() {
  }

}
