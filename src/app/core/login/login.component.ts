import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerView = false;
  constructor( public loginService: LoginService, public authService: AuthService) { }

  ngOnInit() {
  }

  onGotoSignUp() {
    this.registerView = true;
  }

}
