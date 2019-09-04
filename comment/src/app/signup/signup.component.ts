import { Component, OnInit } from '@angular/core';
import { NgForm , FormGroup,  FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  data: any = {};

  constructor(private fb: FormBuilder) {   this.createForm();}

  ngOnInit() {
  }
  angForm: FormGroup;
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
   });
 }


}
