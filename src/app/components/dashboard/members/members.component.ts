import { Component, OnInit } from '@angular/core';

// Services
import { MembersService } from 'src/app/services/members.service';

// Utils Imports
import { IMembers } from 'src/app/types/members';
import { MEMBER_COMPONENT } from "../../../utils/constants";

@Component({
  selector: 'member-component',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit{
  constructor(private memberService: MembersService){}
  viewModes:any = MEMBER_COMPONENT.VIEW_MODE;

  searchMember:string = '';
  currentView: string = this.viewModes.GRID;
  membersList:Array<IMembers> = [];
  originalArray:Array<IMembers> = [];
  
  ngOnInit(): void {
    this.memberService.getMembersList().subscribe(data => {
      this.membersList = data;
      this.originalArray = data;
    })
  }
  
  searchKey(data:string) {
    if(data){
      this.membersList = this.originalArray.filter(li => (li.fullName.indexOf(data) > -1) || (li.role.indexOf(data) > -1))
    } else {
      this.membersList = this.originalArray;
    }
  }

  updateView(view:string){
    this.currentView = view;
  }
}
