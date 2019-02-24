import { Component, OnInit } from '@angular/core';
import { SidenavList } from './sidenavList';
import { MainContentNameService } from '../shared/main-content-name.service';

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
      displayName: 'dashboard',
      routerLink: ''
    },
    {
      icon: 'monetization_on',
      displayName: 'expenses',
      routerLink: ''
    },
    {
      icon: 'weekend',
      displayName: 'Households',
      routerLink: '/households'

    }
    ,   {
      icon: 'person',
      displayName: 'Profile',
      routerLink: '/profile'

    },
    {
      icon: 'build',
      displayName: 'setting',
      routerLink: ''
    }
  ];
  constructor(public contentName: MainContentNameService) { }

  ngOnInit() {
  }
  sendContentName(name: string) {
    console.log('inside group triggered');
    this.contentName.setContentName(name);
}
}
