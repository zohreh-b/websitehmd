import { AutGuardAdmin } from './signup/aut-guard-admin.service';
import { AutGuard } from './signup/aut-guard.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './homepage/post/post.component';
import { IndustryComponent } from './industry/industry.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EshterakComponent } from './eshterak/eshterak.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { DashboardComponent } from './signup/dashboard/dashboard.component';
import { ListmenuComponent } from './sidebar/listmenu/listmenu.component';
import { CarComponent } from './sidebar/car/car.component';
import {RepaircarComponent}from './sidebar/repaircar/repaircar.component';
import{RentcarComponent}from './sidebar/rentcar/rentcar.component';
import{DecoratingComponent} from './sidebar/decorating/decorating.component';
import{ServicescarComponent}from './sidebar/servicescar/servicescar.component';
import{SpairpartsComponent}from './sidebar/spairparts/spairparts.component';
import{CarwashComponent}from './sidebar/carwash/carwash.component';
import {HousingconsoultuntComponent} from './sidebar/housingconsoultunt/housingconsoultunt.component';
import { GardenComponent } from './sidebar/garden/garden.component';
import { from } from 'rxjs';
import { TakingpartComponent } from './sidebar/takingpart/takingpart.component';
import { BookstaresComponent } from './sidebar/bookstares/bookstares.component';
import { StationeryComponent } from './sidebar/stationery/stationery.component';
import { BraingamesComponent } from './sidebar/braingames/braingames.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',component:PostComponent},
  {path:'industry',component:IndustryComponent},
  {path:'newsletters',component:NewslettersComponent},
  {path:'post',component:PostComponent},
  {path:'listmenu',component:ListmenuComponent},
  {path:'car',component:CarComponent},
  {path:'repaircar',component:RepaircarComponent},
  {path:'rentcar',component:RentcarComponent},
  {path:'decorating',component:DecoratingComponent},
  {path:'servicescar',component:ServicescarComponent},
  {path:'spairparts',component:SpairpartsComponent},
  {path:'carwash',component:CarwashComponent},
  {path:'housingconsoultunt',component:HousingconsoultuntComponent},
  {path:'garden',component:GardenComponent},
  {path:'takingpart',component:TakingpartComponent},
  {path:'bookstares',component:BookstaresComponent},
  {path:'stationery',component:StationeryComponent},
  {path:'braingames',component:BraingamesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'eshterak', component:EshterakComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
