import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HouseHold } from 'src/app/core/model/houseHold.model';

import { AuthService } from 'src/app/core/auth.service';

import { DataService } from 'src/app/core/data.service';
import { compileComponentFromMetadata } from '@angular/compiler';
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {
  house = new HouseHold();
  resident = [];
  addHouseForm = this.fb.group({
    houseTitle: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postCode: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.resident.push(user.uid);
    });
    // console.log(this.resident);
  }
  onSubmit(formData): void {

    this.house = {
      houseTitle: formData.houseTitle,
      city: formData.city,
      street: formData.street,
      postCode: formData.postCode,
      state: formData.state,
      residents: this.resident
    };
    console.log(this.house);
    this.dataService.addHousehold(this.house);
}
}
