import { Component, OnInit, ElementRef,ViewChild, Input } from '@angular/core';
import { NgForm , FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import{SignupService} from './signup.service';
import { Router } from '@angular/router';
import { MustMatch } from '../login/_helper/must-match.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  data: any = {};
  @ViewChild('username',{static:false}) Username:ElementRef;
  @ViewChild('password',{static:false}) Password:ElementRef;
  @Input() iduser;
 loginmsg:string="";

  constructor(private fb: FormBuilder,private signupservice:SignupService,private router:Router) {   this.createForm();}

  ngOnInit() {
    this.signupservice.signout();
  }
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
   });
 }
 btnsignupcheck(){
   if(this.signupservice.signupcheck(this.Username.nativeElement.value,
    this.Password.nativeElement.value))
    this.router.navigate(['dashboard']);
    else
    this.loginmsg="نام کاربری یا رمز عبور اشتباه است";

 this.iduser= this.Username.nativeElement.value;
 }


}
