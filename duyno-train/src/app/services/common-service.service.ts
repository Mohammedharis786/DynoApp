import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  private passingDataSubject = new BehaviorSubject<any>(null);
  passingData$ = this.passingDataSubject.asObservable();

  setPassingData(data: any) {
    this.passingDataSubject.next(data);
  }

}
