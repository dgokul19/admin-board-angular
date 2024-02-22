import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { DashboardRoutingModule } from "./dashboard-routing.module";
// Component 
import { MainHeaderComponent } from '../main-header/main-header.component';
import { DashboardComponent } from "./dashboard.component";
import { NavigationComponent } from '../navigation/navigation.component';
import { MembersComponent } from './members/members.component';
import { PersonComponent } from './members/person/person.component';
import { MembersDetailComponent } from './members-detail/members-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainHeaderComponent,
    NavigationComponent,
    MembersComponent,
    PersonComponent,
    MembersDetailComponent
  ],
  imports: [DashboardRoutingModule, CommonModule,FormsModule],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
