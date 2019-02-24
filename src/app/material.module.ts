import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
