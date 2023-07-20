import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import multibar from '../smallconm/json/multibar.json';
import { StoriesComponent } from '../stories/stories.component';
import { UserInterfaceComponent } from '../user-interface/user-interface.component';
import { AppVisionComponent } from '../app-vision/app-vision.component';
import { Router } from '@angular/router';
// import bar from '../smallconm/json/multibar11.json'

@Component({
  selector: 'app-multilevelmenu',
  templateUrl: './multilevelmenu.component.html',
  styleUrls: ['./multilevelmenu.component.scss'],
})
export class MultilevelmenuComponent implements OnInit {

  // @Input() showAppVision: boolean;
  @Output() selectedOption = new EventEmitter<string>();

  showList: boolean = false;
  multibar: any[] = multibar;
  activeButtonId: number | null = null;


  constructor(private router: Router) { }

  ngOnInit() { }


  // setActiveButton(listItems: any) {
  //  return  this.activeButtonId === listItems.id;

  // }





  toggleList(listItems: any) {
    this.multibar.forEach(ele => {
      if (ele !== listItems) {
        ele.showSubItems = false
      }
    })
    listItems.showSubItems = !listItems.showSubItems;
    this.activeButtonId = listItems.id;
    console.log(listItems.id);

    this.selectedOption.emit(listItems);
  }
}
