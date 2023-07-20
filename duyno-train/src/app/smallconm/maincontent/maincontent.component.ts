import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MaincontentComponent  implements OnInit {
 dataRecevied:any
  constructor(private common:CommonServiceService) { }

  ngOnInit() {
  this.common.passingData$.subscribe(data=>{
    if(data){
      this.dataRecevied = data; 
    }
  });
  }
  

}
