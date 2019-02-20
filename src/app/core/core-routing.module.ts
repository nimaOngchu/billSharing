import { NgModule } from '@angular/core';
import { RouterModule,  Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from '../group/group.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RedirectToMainGuard } from './guard/redirect-to-main.guard';
import { HouseholdComponent } from '../household/household.component';
const appRoutes: Routes = [

  { path: '', component: HomeLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'group', component: GroupComponent },
      { path: 'household', component: HouseholdComponent },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent, canActivate: [RedirectToMainGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
