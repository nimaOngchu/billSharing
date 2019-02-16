import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidenavHeaderComponent } from './navigation/sidenav-header/sidenav-header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SidenavFooterComponent } from './navigation/sidenav-footer/sidenav-footer.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { SidenavMainContentHeaderComponent } from './navigation/sidenav-main-content-header/sidenav-main-content-header.component';
import { RedirectToMainGuard } from './guard/redirect-to-main.guard';

 @NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
     MaterialModule,
     CommonModule,
     BrowserModule,
     RouterModule,
     AngularFireAuthModule,
     AngularFirestoreModule

   ],

  declarations: [
    NavigationComponent,
     LoginComponent,
     SidenavHeaderComponent,
     SidenavListComponent,
     SidenavFooterComponent,
     LoginLayoutComponent,
     HomeLayoutComponent,
     SidenavMainContentHeaderComponent,
   ],

  exports: [
    NavigationComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule

   ],

  providers: [
    LoginService,
    AuthService,
    AuthGuard,
    RedirectToMainGuard
  ]
})
export class CoreModule { }
