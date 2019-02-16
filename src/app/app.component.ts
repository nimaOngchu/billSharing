import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedin: boolean;
  constructor(public authService: AuthService) {

  }

}
