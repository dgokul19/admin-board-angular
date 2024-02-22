import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {


  handleSubmit(loginForm:any) {
    if(loginForm.valid){

    }
  }
}
