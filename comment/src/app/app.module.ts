import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import{AutGuard} from './signup/aut-guard.service';
import{AutGuardAdmin} from './signup/aut-guard-admin.service';
import{SignupService} from './signup/signup.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HeaderComponent} from './homepage/header/header.component'
import { HomepageComponent } from './homepage/homepage.component';
import {SearchboxComponent} from './homepage/header/searchbox/searchbox.component';
import { PostComponent } from './homepage/post/post.component';

import { FooterComponent } from './homepage/footer/footer.component';
import { IndustryComponent } from './industry/industry.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { EshterakComponent } from './eshterak/eshterak.component';
import { PropertyComponent } from './homepage/property/property.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { ListmenuComponent } from './sidebar/listmenu/listmenu.component';
import { DashboardComponent } from './signup/dashboard/dashboard.component';
import { CarComponent } from './sidebar/car/car.component';
import { RepaircarComponent } from './sidebar/repaircar/repaircar.component';
import { RentcarComponent } from './sidebar/rentcar/rentcar.component';
import { DecoratingComponent } from './sidebar/decorating/decorating.component';
import { ServicescarComponent } from './sidebar/servicescar/servicescar.component';
import { SpairpartsComponent } from './sidebar/spairparts/spairparts.component';
import { CarwashComponent } from './sidebar/carwash/carwash.component';
import { HousingconsoultuntComponent } from './sidebar/housingconsoultunt/housingconsoultunt.component';
import { GardenComponent } from './sidebar/garden/garden.component';
import { TakingpartComponent } from './sidebar/takingpart/takingpart.component';
import { BookstaresComponent } from './sidebar/bookstares/bookstares.component';
import { StationeryComponent } from './sidebar/stationery/stationery.component';
import { BraingamesComponent } from './sidebar/braingames/braingames.component';






@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    HeaderComponent,
    SearchboxComponent,
    PostComponent,
    FooterComponent,
    IndustryComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    EshterakComponent,
    PropertyComponent,
    NewslettersComponent,
    ListmenuComponent,
    DashboardComponent,
    CarComponent,
    RepaircarComponent,
    RentcarComponent,
    DecoratingComponent,
    ServicescarComponent,
    SpairpartsComponent,
    CarwashComponent,
    HousingconsoultuntComponent,
    GardenComponent,
    TakingpartComponent,
    BookstaresComponent,
    StationeryComponent,
    BraingamesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutGuard,AutGuardAdmin,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
