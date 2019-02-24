import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HouseHold } from './model/houseHold.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  houseHoldCollection: AngularFirestoreCollection<HouseHold>;
  houses: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.houseHoldCollection = this.afs.collection('households');
    this.houses = this.afs.collection('households').valueChanges();
  }

  getHouseholdsOFUser() {
    return this.houses;
  }

  addHousehold(house: HouseHold) {
    this.houseHoldCollection.add(house);
  }
}
