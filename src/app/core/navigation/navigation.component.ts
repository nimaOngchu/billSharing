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
  screenWidth: number;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);
  @ViewChild('sidenav') sidenav: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  constructor() { }

  ngOnInit() {
    this.screenWidth$.subscribe(width => {
      this.screenWidth = width;
    });
  }

  getTheme(): string {
    return localStorage.getItem(this.localStorageKey);
  }
  changeTheme(event) {
    localStorage.setItem(this.localStorageKey, event);
  }
}
