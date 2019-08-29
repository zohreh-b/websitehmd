<<<<<<< HEAD
import { AutGuardAdmin } from './signup/aut-guard-admin.service';
import { AutGuard } from './signup/aut-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './homepage/post/post.component';
import { IndustryComponent } from './industry/industry.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondpageComponent } from './secondpage/secondpage.component'
import { PostComponent } from './homepage/post/post.component';
import { IndustryComponent } from './industry/industry.component';
>>>>>>> mastercommit

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',component:PostComponent},
<<<<<<< HEAD
  {path:'industry',component:IndustryComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',canActivate:[AutGuard], component:DashboardComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
=======
  {path:'secondpage',component:SecondpageComponent},
  {path:'industry',component:IndustryComponent}
>>>>>>> mastercommit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
  
=======
  exports: [RouterModule]
>>>>>>> mastercommit
})
export class AppRoutingModule { }
