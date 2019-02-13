import { NgModule } from '@angular/core';
import { RouterModule,  Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from '../group/group.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'group', component: GroupComponent },

  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
