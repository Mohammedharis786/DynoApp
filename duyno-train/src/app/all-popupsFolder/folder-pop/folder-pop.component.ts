import { Component, Input, OnInit } from '@angular/core';
import multibar from 'src/app/smallconm/json/multibar.json'
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-folder-pop',
  templateUrl: './folder-pop.component.html',
  styleUrls: ['./folder-pop.component.scss'],
})
export class FolderPopComponent  implements OnInit {

  @Input()
  isEditMode: boolean = false;
  multibar: any[] = multibar;
   
  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  closePopup(){
    this.popoverController.dismiss();
  }

}
