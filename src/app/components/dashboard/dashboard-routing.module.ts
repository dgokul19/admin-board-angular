import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MembersComponent } from './members/members.component';
import { MembersDetailComponent } from "./members-detail/members-detail.component";
const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children : [
      { 
        path : 'members', 
        component : MembersComponent,
      },
      { path : 'members/details/:id', component : MembersDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
