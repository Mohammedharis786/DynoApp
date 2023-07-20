import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { cardsData } from '../shared/cards';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { SideMenuService } from 'src/app/services/side-menu.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
  cardsdata:cardsData[]=[];
  constructor(private service:CardsService,private router:Router, private common:CommonServiceService,private menuserivce:SideMenuService) { }

  ngOnInit() {
    this.cardsdata=this.service.getAll();
  }

  cardData(cards:any) {
   this.common.setPassingData(cards)
   console.log(this.common.setPassingData(cards));
   this.router.navigate(['layout/landing']);
   this.menuserivce.setData(2);
  }  


}
