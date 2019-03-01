import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arr : any;
  userId : number;
  userName : string;
  userEmail : string;
  constructor(private myroute: Router, private mydata: DataService) { }

  ngOnInit() {

    this.mydata.getData().subscribe(res =>  
      {
      this.arr = res
      for(let i=0; i < this.arr.length; i++ ){


        this.userId = this.arr[i].id;
        this.userName = this.arr[i].name;
        this.userEmail = this.arr[i].email;

        console.log(this.userEmail,this.userId,this.userName);
     }
     
    });
  }

  sendMeHome(){
    this.myroute.navigate(['']);
  }

  sendtoRegister(){
    

    this.myroute.navigate(['Register']);
  }


}
