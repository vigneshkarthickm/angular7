import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  Name : string = 'VKM';
  Age : number = 26;
  Address : any;
  colors = ['blue', 'green'];
  profile = {'name' : 'vignesh', 'age' : 25, 'number' :9043171897} ;
  collection = [{'name' : 'vignesh', 'age' : 25, 'number' :9043171897},
                {'name' : 'karthick', 'age' : 26, 'number' :987465123}]

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Benedict', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: '',
      age:['',[Validators.required,Validators.minLength(3)]],
      phone:''
    });
  
  }

 printOf(){
   console.log('name', this.collection);
 }

  onSubmit(form :FormGroup) {
      console.log('valid?', form.valid);
    

  }

}
