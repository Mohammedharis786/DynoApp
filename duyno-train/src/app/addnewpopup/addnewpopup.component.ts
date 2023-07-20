import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import multibar from '../smallconm/json/multibar.json';
import { newData } from 'src/app/addnewpopup/addnewpop';

@Component({
  selector: 'app-addnewpopup',
  templateUrl: './addnewpopup.component.html',
  styleUrls: ['./addnewpopup.component.scss'],
})
export class AddnewpopupComponent implements OnInit {
  @Input() folder: any;
  

  inputText1: string = '';
  inputText2: string = '';
  icon:string="./assets/Polygon 3.png";
  image:string = "./assets/Layer 38.png";

  newArray!: [];
  peopleData: any = newData;
  checked:boolean=false

  dataReceived: any;
  visible: boolean = false

  multibar: any[] = multibar;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    this.dataReceived = this.folder;
    console.log(this.folder);
    this.peopleData[0].Planchild[0] =this.multibar
    console.log(this.multibar);
    console.log(this.peopleData);
  }

  closePopup() {
    this.popoverController.dismiss();
  }

  changeButton() {
    this.visible = !this.visible
  }

  toggleItem(data:any){
    this.multibar.forEach(ele=>{
      if(ele !=data){
        ele.showSubItems = false
      }
    })
  }

  updatedCheckbox(item:any){
    item.checked = !item.checked
  }


  add(){
    const checkData = this.peopleData.filter((item:any)=>item.checked);
    const allData = {
      inputFiled1:this.inputText1,
      inputFiled2:this.inputText2,
      Selectedcheckboxes:checkData,
      // ico:this.icon,
      // img:this.image,
      multibar:checkData.map((item:any)=>{
        item.icon,
        item.image,
        item.text
      })
    }
    this.multibar.push(allData);
  console.log(this.multibar)
  console.log(checkData,"data is here")
    this.peopleData.forEach((item:any)=>(item.checked = false ))
   this.closePopup();
  }
}


