import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent  implements OnInit {
  receivedData:any;
  constructor(private common:CommonServiceService) { }

  ngOnInit() {
    this.common.passingData$.subscribe(data => {
      if(data){
        this.receivedData = data;
        console.log(this.receivedData);
        console.log(this.receivedData.imageurl);
      }
     
    });
  }


  

}
