import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import{Router} from '@angular/router'
import { SignupComponent } from '../../signup/signup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('iduser',{static:false}) Username:ElementRef;
  

  

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
 
  }


