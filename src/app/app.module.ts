import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { GroupComponent } from './group/group.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment} from '../environments/environment';
import { HouseholdComponent } from './household/household.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ProfileComponent,
    HouseholdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
