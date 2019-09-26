import { Injectable } from '@angular/core';
import{ILogin} from './../interface/login';
import{LoginComponent} from './login.component'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginDb:ILogin[]=[
    {firstname:'admin',lastname:'admin',phone:'09121234567',password:'1234',confirmpass:'1234'}
  ];
  constructor() { }
  currentuser:ILogin;
  // logincheck(firstname:string,lastname:string,password:string,phone:string){
  //   this.currentuser=this.loginDb.find(x=>x.firstname.toLowerCase()==firstname.toLowerCase()
  //   && x.password==password)
  //   if(this.currentuser===undefined)
  //   return false
  //   else return true;
  // }
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
        if(this.currentuser.firstname==='Admin')
          resolve(true);
        else  resolve(false);
        
      }
    );
    return promise_admin;
  }
  exit(){
    this.currentuser=null;
  }
}