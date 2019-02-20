import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NavItem } from './navItems';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  localStorageKey = 'theme';
  position: string;
  showSideNav: boolean;
  mode: string;
  btnToogle: string;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);
  @ViewChild('sidenav') sidenav: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  constructor() { }

  ngOnInit() {
this.makeScreenResponsive();
  }

  makeScreenResponsive() {
    this.screenWidth$.subscribe(width => {
      if (width < 640) {
        this.showSideNav = false;
        this.mode = 'over';
        this.btnToogle = 'showBtnToggle';
        this.position = 'start';
      }
      if (width > 640) {
        this.showSideNav = true;
        this.mode = 'side';
        this.btnToogle = 'hideBtnToggle';
        this.position = 'start';
      }
    });
  }

  getTheme(): string {
    return localStorage.getItem(this.localStorageKey);
  }
  changeTheme(event) {
    localStorage.setItem(this.localStorageKey, event);
  }
}
