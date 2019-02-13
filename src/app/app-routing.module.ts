import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';

const appRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },

  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule]
  })
  export class AppRoutingModule { }
