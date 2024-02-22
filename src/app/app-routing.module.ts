import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { 
    path: 'admin', 
    loadChildren: () => import ('./components/dashboard/dashboard.module').then(c => c.DashboardModule),
    data: { title: 'Dashboard', preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
