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
import { HouseholdsComponent } from './households/households.component';
import { HouseComponent } from './households/house/house.component';
import { AddHouseComponent } from './households/add-house/add-house.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ProfileComponent,
    HouseholdsComponent,
    HouseComponent,
    AddHouseComponent
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
  entryComponents:[ AddHouseComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
