import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-app';

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('isConnected');
    this.router.navigate(['']);
  }

  isConnected() {
    if (Boolean(localStorage.getItem('isConnected'))) {
      return true;
    } else {
      return false;
    }
  }
}