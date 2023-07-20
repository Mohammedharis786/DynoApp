import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent  implements OnInit {
  names: string[] = ['clientvision','Product 24',"priority",'valid','developers']
  selectedNames: string[] = [];
  searchText: string = '';
   
  @Input()
  isEditMode: boolean = false;

  constructor() { }

  ngOnInit() {}

  toggleName(name: string) {
    if (this.selectedNames.includes(name)){
      this.selectedNames = this.selectedNames.filter(ele=> ele !==name);
    }else{
      this.selectedNames.push(name)
    }
 
  }

  filterNames() {
    if (this.searchText) {
      return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      return [];
    }
  }
}
