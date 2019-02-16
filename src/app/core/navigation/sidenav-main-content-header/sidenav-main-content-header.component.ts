import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MainContentNameService } from '../shared/main-content-name.service';

@Component({
  selector: 'app-sidenav-main-content-header',
  templateUrl: './sidenav-main-content-header.component.html',
  styleUrls: ['./sidenav-main-content-header.component.scss']
})
export class SidenavMainContentHeaderComponent implements OnInit {

  @Output() emitThemeClass = new EventEmitter<string>();
  constructor( public contentName: MainContentNameService) { }
  contentTitle: string;
  ngOnInit() {
    this.contentName.getContentName()
      .subscribe(result => {
        this.contentTitle = result;
    });
  }
  changeTheme( theme) {
    this.emitThemeClass.emit(theme);
  }

}
