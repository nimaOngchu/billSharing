import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-main-content-header',
  templateUrl: './sidenav-main-content-header.component.html',
  styleUrls: ['./sidenav-main-content-header.component.scss']
})
export class SidenavMainContentHeaderComponent implements OnInit {
  themeColor: string;
  @Output() emitThemeClass = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }
  changeTheme( theme) {
    this.emitThemeClass.emit(theme);
  }
}
