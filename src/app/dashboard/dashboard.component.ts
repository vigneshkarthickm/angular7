import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mobileCollection=[{"ram" : '2gb', "screen" : 5, "brand" : 'iPhone6'},
                    {"ram" : '2gb', "screen" : 6, "brand" : 'iPhone6P'},
                    {"ram" : '2gb', "screen" : 6, "brand" : 'iPhone7'},
                    {"ram" : '2gb', "screen" : 7, "brand" : 'iPhone7P'},
                    {"ram" : '2gb', "screen" : 5.5, "brand" : 'iPhone10'}
                    ];


people: any[] = [{"name": "Douglas  Pace","age": 35,"country": 'MARS'},
                {"name": "Mcleod  Mueller","age": 32,"country": 'USA'},
                {"name": "Day  Meyers","age": 21,"country": 'HK'},
                {"name": "Aguirre  Ellis","age": 34,"country": 'UK'},
                {"name": "Cook  Tyson","age": 32,"country": 'USA'}
                ];
                  
  constructor() { }

  ngOnInit() {
  }

}
