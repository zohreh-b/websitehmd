import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import{AutGuard} from './signup/aut-guard.service';
import{AutGuardAdmin} from './signup/aut-guard-admin.service';
import{SignupService} from './signup/signup.service';

=======
>>>>>>> mastercommit

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HeaderComponent} from './homepage/header/header.component'
import { HomepageComponent } from './homepage/homepage.component';
import {SearchboxComponent} from './homepage/header/searchbox/searchbox.component';
import { PostComponent } from './homepage/post/post.component';
<<<<<<< HEAD

import { FooterComponent } from './homepage/footer/footer.component';
import { IndustryComponent } from './industry/industry.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';

=======
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { IndustryComponent } from './industry/industry.component';
import { LoginComponent } from './login/login.component';
>>>>>>> mastercommit





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    HeaderComponent,
    SearchboxComponent,
    PostComponent,
<<<<<<< HEAD
    FooterComponent,
    IndustryComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    DashboardComponent,
    PropertyComponent,
=======
    SecondpageComponent,
    FooterComponent,
    IndustryComponent,
    LoginComponent,
>>>>>>> mastercommit
  
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutGuard,AutGuardAdmin,SignupService],
=======
    AppRoutingModule
  ],
  providers: [],
>>>>>>> mastercommit
  bootstrap: [AppComponent]
})
export class AppModule { }
