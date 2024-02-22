import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthServices } from './services/AuthServices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Angular App';
  constructor (private route:Router, private authServices: AuthServices) {}

  ngOnInit() {
    if(this.authServices.getAuthStatus()){
      this.route.navigate(['/admin']);
    } else {
      this.route.navigate(['/login']);
    }
  }
}
