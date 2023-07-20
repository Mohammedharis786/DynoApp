import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sidemenu from '../smallconm/json/sidemenu.json';
import sidebar from '../smallconm/json/sidebar.json';
// import multibar from '../smallconm/json/multibar.json';
import { SideMenuService } from '../services/side-menu.service';
import { CommonServiceService } from '../services/common-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  // multibar:any[]=multibar;
  // @Input() showSidebar=true;
  sidemenu: any[] = sidemenu;
  sidebar: any[] = sidebar;
  level: any = 1;
  urls: any;
  received: any;
  resp: any
  constructor(private router: Router, private menuservice: SideMenuService, private commons: CommonServiceService,private menuController:MenuController) {
    console.log(sidemenu)
  }

  ngOnInit() {
    this.menuservice.sideMenu.subscribe(val => {
      this.level = val;
    });
   this.resp =  this.commons.passingData$.subscribe(data => {
      if (data) {
        this.received = data;
        console.log(this.received, "data is here")
      }
    })
  }
   
  ngOnDestroy(){
   this.resp.unsubscribe()
  }
  navigation() {
    this.menuservice.setData(1);
    this.router.navigate(['layout/dash']) 
    console.log(this.received)
   

  }


}
