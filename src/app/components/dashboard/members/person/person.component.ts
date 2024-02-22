import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { MembersService } from 'src/app/services/members.service';

// Imports
import { IMembers } from 'src/app/types/members';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  @Input() person! : IMembers
  memberSearch:string ='';
  constructor(
    private memberService: MembersService, 
    private route:Router, 
    private acRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.person.identityLetters = this.memberService.getMemberIdentityLetters(this.person.fullName);
  }

  viewDetails(personId:Number) {
    this.route.navigate(['details',personId], { relativeTo: this.acRoute });
  }
  
}
