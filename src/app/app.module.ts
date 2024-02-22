import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthServices } from "./services/AuthServices";

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [RouterModule],
  providers: [AuthServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
