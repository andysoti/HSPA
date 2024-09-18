import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    // this.loggedinUser = localStorage.getItem('token');
    return localStorage.getItem('token') // this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token')
  }

}
