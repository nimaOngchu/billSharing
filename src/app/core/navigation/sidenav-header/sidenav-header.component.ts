import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MainContentNameService } from '../shared/main-content-name.service';

@Component({
  selector: 'app-sidenav-header',
  templateUrl: './sidenav-header.component.html',
  styleUrls: ['./sidenav-header.component.scss']
})
export class SidenavHeaderComponent implements OnInit {

  constructor(public authService: AuthService, private contentName: MainContentNameService) { }

  ngOnInit() {
  }
  passContentName(name: string) {
    this.contentName.setContentName(name);
}
}
