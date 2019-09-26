import { Injectable } from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { from,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradAdmin implements CanActivate {
  
  constructor(private loginservice:LoginService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    return this.loginservice.isAuthenticated_Admin().then(
      (auth:boolean)=>{
        if(auth)
        {
          return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
      }

    );

      

    }
  
}
