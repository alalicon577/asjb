import { Component,OnInit } from '@angular/core';

import '../assets/css/styles.css';
import 'bootstrap';
declare var require: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isMyGroupSelected: boolean = false;
  isHomeSelected: boolean = false;
  isMyContentSelected: boolean = false;

  ngOnInit(){
    this.isHomeSelected =true;
  }

  onClick() {
    console.log('clicked');
  }
}