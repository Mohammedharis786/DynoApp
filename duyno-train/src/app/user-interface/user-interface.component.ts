import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss'],
})
export class UserInterfaceComponent  implements OnInit {
 
  isEditMode: boolean = false

  constructor() { }

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
