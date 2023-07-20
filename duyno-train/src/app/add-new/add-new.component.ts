import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {items} from 'src/app/add-new/newData';
import { AddnewpopupComponent } from '../addnewpopup/addnewpopup.component';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent  implements OnInit {

  rawData:any=items;


  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
    this.rawData
    console.log(this.rawData);
  }

  closePopup(){
    this.popoverController.dismiss();
  }


  async openPoppOver(ele:any){
    const modal = await this.popoverController.create({
      component: AddnewpopupComponent,
     cssClass:'my-custom-class',
    translucent: true,
    componentProps:{
       folder:ele,
    }
    });
    console.log(ele);

    return await modal.present();

}
  }


