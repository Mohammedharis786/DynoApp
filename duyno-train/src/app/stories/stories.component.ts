import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent  implements OnInit {

  constructor() { }

  isEditMode: boolean = false
  ngOnInit() { }




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
