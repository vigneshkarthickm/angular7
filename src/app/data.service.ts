import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url : string;

  constructor(private http: HttpClient) { }

  getData()
  {
    
    this.url = 'https://jsonplaceholder.typicode.com/users';
    
    return this.http.get(this.url);
  }

}
