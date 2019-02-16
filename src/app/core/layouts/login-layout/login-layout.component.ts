import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
  <div [ngClass] = 'getTheme()'>
  <router-outlet></router-outlet>
  </div>

  `,
  styles: []
})
export class LoginLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getTheme() {
    return localStorage.getItem('theme');
  }

}
