import { Component, OnInit } from '@angular/core';
import {LogoutService} from '../logout.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

   
  style():void{
    document.querySelector(".home").classList.add("homestyle");
  }

  noStyle():void{
    document.querySelector(".home").classList.remove("homestyle");
  }

  ngOnInit() {
  }

  

}
