import { Component, Input, OnInit } from '@angular/core';
// import multibar from '../smallconm/json/multibar.json';
import multibar from 'src/app/smallconm/json/multibar.json'

@Component({
  selector: 'app-linked-items',
  templateUrl: './linked-items.component.html',
  styleUrls: ['./linked-items.component.scss'],
})
export class LinkedItemsComponent  implements OnInit {
  @Input()
  isEditMode: boolean = false;
   isDisplay:boolean=false
 multibar: any[] = multibar;
 selectedNames:string[]=[];

  constructor() { }

  ngOnInit() {}

  displayText(event:any){
    if (this.selectedNames.includes(event.image && event.text)){
      this.selectedNames = this.selectedNames.filter(ele => ele !== event.name && event.text);
    }else{
      this.selectedNames.push(event.text)
    }

  }

}
