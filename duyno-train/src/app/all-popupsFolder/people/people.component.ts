import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent  implements OnInit {
  selectedItems:any
  selectedIte:string[]=[];
  data:string[]=['haris','ashish','imran','faizan','avinash','pawan'];
  searchItems:string='';
   
  @Input()
  isEditMode: boolean = false;
  constructor() { }
  

  ngOnInit() {}
  

  toggleList(event:any){
    if(this.selectedIte.includes(event)){
      this.selectedIte = this.selectedIte.filter(ele => ele !== event)
    }else{
      this.selectedIte.push(event)
    }
  }

  filtersText(){
    if(this.searchItems){
      return this.data.filter(item=> item.toLowerCase().includes(this.searchItems.toLowerCase()))
    }else{
      return[]
    }
  }
}
