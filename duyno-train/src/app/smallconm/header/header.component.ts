import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddNewComponent } from 'src/app/add-new/add-new.component';
import { DotedPopupComponent } from 'src/app/doted-popup/doted-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private popoverController:PopoverController) { }



  ngOnInit() {}


 async openPopup(ev:any){

    const modal = await this.popoverController.create({
      component: AddNewComponent,
     event:ev,
     cssClass:'my-custom-class',
    translucent: true
    });
    return await modal.present();
  }

  async popup(ev:any){
    const modal = await this.popoverController.create({
      component:DotedPopupComponent,
     event:ev,
     cssClass:'my-custom-class',
    translucent: true
    });
    return await modal.present();
  }

}
