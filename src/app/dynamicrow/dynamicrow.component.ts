import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicrow',
  templateUrl: './dynamicrow.component.html',
  styleUrls: ['./dynamicrow.component.css']
})
export class DynamicrowComponent implements OnInit {

  mobileCollection=[{ram : '2gb', screen : 5, brand : 'iPhone6'},
  {ram : '2gb', screen : 6, brand : 'iPhone6P'},
  {ram : '2gb', screen : 6, brand : 'iPhone7'}];


  dummy = {ram : '', screen :0 , brand : ''};
  constructor() { }

  ngOnInit() {
  }



  addMobile(index){
    this.mobileCollection.splice(index ,0, this.dummy);
  }
}
