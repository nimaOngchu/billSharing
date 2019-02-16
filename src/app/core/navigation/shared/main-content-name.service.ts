import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContentNameService {
  contentName$ = new BehaviorSubject<string>('nima');
  passContentName = this.contentName$.asObservable();
  constructor() { }
  setContentName(name: string) {
        this.contentName$.next(name);
  }
  getContentName(): Observable<string> {
    return this.contentName$.asObservable();
  }

}
