import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sidenav-header',
  templateUrl: './sidenav-header.component.html',
  styleUrls: ['./sidenav-header.component.scss']
})
export class SidenavHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
