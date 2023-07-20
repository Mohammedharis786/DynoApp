import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DocumentsComponent } from '../all-popupsFolder/documents/documents.component';
import { FolderPopComponent } from '../all-popupsFolder/folder-pop/folder-pop.component';
import { PeopleComponent } from '../all-popupsFolder/people/people.component';
import { TagsComponent } from '../all-popupsFolder/tags/tags.component';
import { LinkedItemsComponent } from '../all-popupsFolder/linked-items/linked-items.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent  implements OnInit {

  @Input()
  isEditMode: boolean = false;

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}
   


  closePopup(){
    this.popoverController.dismiss();
  }


  async openPopup(ev:any){
  
    const modal = await this.popoverController.create({
      component: DocumentsComponent,
     event:ev,
     cssClass:'my-custom-class',
    translucent: true,
    componentProps: {
      isEditMode: this.isEditMode 
    }
    });
    return await modal.present();

}

async openPopup1(){
  const modal = await this.popoverController.create({
    component: PeopleComponent,
   cssClass:'my-custom-class',
  translucent: true,
  componentProps: {
    isEditMode: this.isEditMode 
  }
  });
  return await modal.present();
}
  
async openPopup2(){
  const modal = await this.popoverController.create({
    component: TagsComponent,
   cssClass:'my-custom-class',
  translucent: true,
  componentProps: {
    isEditMode: this.isEditMode 
  }
  });
  return await modal.present();
}
async openPopup3(){
  const modal = await this.popoverController.create({
    component: LinkedItemsComponent,
   cssClass:'my-custom-class',
  translucent: true,
  componentProps: {
    isEditMode: this.isEditMode 
  }
  });
  return await modal.present();
}
async openPopup4(){
  const modal = await this.popoverController.create({
    component: FolderPopComponent,
   cssClass:'my-custom-class',
  translucent: true,
  componentProps: {
    isEditMode: this.isEditMode 
  }
  });
  return await modal.present();
}
}
