import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NavItem } from './navItems';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';

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

  constructor(private overlayContainer: OverlayContainer) {

  }

  ngOnInit() {
    this.makeScreenResponsive();
    this.overlayContainer.getContainerElement().classList.add(this.getTheme());
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
    return localStorage.getItem('theme');
  }
  changeTheme(event) {
    localStorage.setItem('theme', event);
    const overlayClass = this.overlayContainer.getContainerElement().classList;
    if (overlayClass.length > 1) {
      overlayClass.remove('teal-theme', 'yellow-theme', 'blue-theme', 'purple-theme');
      overlayClass.add(this.getTheme());
    }

  }
}
