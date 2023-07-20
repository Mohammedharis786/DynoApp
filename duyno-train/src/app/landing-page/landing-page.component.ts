import { Component, OnInit } from '@angular/core';
import sidebar from '../smallconm/json/multibar.json'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
    


  selectedOption:any

  updateSelectedOption(listItems:any) {
    this.selectedOption = listItems.id;
    console.log(  this.selectedOption)
  }
}
