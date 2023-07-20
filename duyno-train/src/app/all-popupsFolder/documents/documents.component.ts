import { Component, Input, OnInit } from '@angular/core';
import { NavParams ,PopoverController} from '@ionic/angular';
// import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent  implements OnInit {
   
  @Input()
  isEditMode: boolean = false;

  constructor(private popoverController:PopoverController, private navParams:NavParams,) { }
  
  title:any;
  url:any = '';

  ngOnInit() {
    this.title = this.navParams.get('title')
  }

  
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);   
      reader.onload = (event:any) => { 
        this.url = event.target.result;
      }
    }
  }
 

}
