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
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SidenavFooterComponent } from './navigation/sidenav-footer/sidenav-footer.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

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
     HeaderComponent,
     SidenavListComponent,
     SidenavFooterComponent],

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
    AuthService
  ]
})
export class CoreModule { }
