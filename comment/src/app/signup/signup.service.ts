import { Injectable } from '@angular/core';
import{ISignup} from './../interface/signup';

import{SignupComponent} from './signup.component';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupDb:ISignup[]=[
    {nameFamily:'admin',username:'admin',password:'1',level:'admin'},
    {nameFamily:'zohrehbodaghi',username:'zohreh',password:'0521244595',level:'user'}
  ];
  constructor() { }
  currentuser:ISignup;
  signupcheck(username:string,password:string){
    this.currentuser=this.signupDb.find(x=>x.username.toLowerCase()==username.toLowerCase()
    && x.password==password)
    if(this.currentuser===undefined)
    return false
    else return true;
  }
  isAuthenticated_User(){
    const promise_user=new Promise(
      (resolve,reject)=>{
        if(this.currentuser === undefined)
        resolve(false);
        else  resolve(true);
      }
    );
    return promise_user;
  }


  isAuthenticated_Admin(){

    const promise_admin=new Promise(
      (resolve,reject)=>{
        if(this.currentuser=== undefined)
        resolve(false);
        if(this.currentuser.level==='Admin')
          resolve(true);
        else  resolve(false);
        
      }
    );
    return promise_admin;
  }
  signout(){
    this.currentuser=null;
  }

}
