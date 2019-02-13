import { Component, OnInit } from '@angular/core';
import { SidenavList } from './sidenavList';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
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
