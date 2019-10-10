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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListmenuComponent } from './sidebar/listmenu/listmenu.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',component:PostComponent},
  {path:'industry',component:IndustryComponent},
  {path:'newsletters',component:NewslettersComponent},
  {path:'post',component:PostComponent},
  {path:'listmenu',component:ListmenuComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'signup/:username',component:SignupComponent},
  {path:'eshterak', component:EshterakComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
