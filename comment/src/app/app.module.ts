import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
