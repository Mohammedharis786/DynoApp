import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  sideMenu = new BehaviorSubject<any>(1);
  

  setData(data: any) {
    this.sideMenu.next(data);
  }

 
}
