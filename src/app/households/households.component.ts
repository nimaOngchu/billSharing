import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HouseComponent } from './house/house.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { DataService } from '../core/data.service';
@Component({
  selector: 'app-households',
  templateUrl: './households.component.html',
  styleUrls: ['./households.component.scss']
})
export class HouseholdsComponent implements OnInit {

  constructor( public dialog: MatDialog , public dialogRef: MatDialog, public dataService: DataService) {  }

  ngOnInit() {
    this.dataService.getHouseholdsOFUser().subscribe(houses => {
      // console.log(houses);
    });
  }
  addHouse() {
    const dialogRef = this.dialog.open(AddHouseComponent, {
      height: '590px',
      width: '400px',
    });

}
}
