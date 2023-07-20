import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-app-vision',
  templateUrl: './app-vision.component.html',
  styleUrls: ['./app-vision.component.scss'],
})
export class AppVisionComponent implements OnInit {

  constructor(private popoverController:PopoverController) { }
  isEditMode: boolean = false
  textValue = 'Initial Value';
  ngOnInit() { }

  async openPopup(ev:any){
  
      const modal = await this.popoverController.create({
        component: PopupComponent,
       event:ev,
       cssClass:'my-custom-class',
      translucent: true,
      componentProps: {
        isEditMode: this.isEditMode 
      }
      });
      return await modal.present();
  }

 


  isEdit() {
    this.isEditMode = true;
  }



  closeEdit() {
     this.isEditMode = false;
  }


  saveChanges() {
   this.isEditMode = false;
  }
}
