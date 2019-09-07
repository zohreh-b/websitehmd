import { Injectable } from '@angular/core';
import{SignupComponent} from './signup.component';
import{SignupService} from './signup.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate{

  constructor(private signupservice:SignupService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.signupservice.isAuthenticated_User().then(
      (auth:boolean)=>{
        if(auth){
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      }


    );

  }


}




  
 