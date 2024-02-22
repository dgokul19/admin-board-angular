import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Imports Interface
import { IMembers } from "../types/members";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private membersListUrl:string = '/assets/mock/members.json';

  constructor(private httpClient:HttpClient){}
  
  getMembersList():Observable<IMembers[]> {
    return this.httpClient.get<IMembers[]>(this.membersListUrl);
  }

  getMemberIdentityLetters(fullName:string):string {
    let resultString:any;
    resultString = fullName.split(' ');
    if(resultString.length) {
      resultString = resultString.map((c:string) => c.charAt(0));
      return resultString.join('')
    }
    return '';
  }
}
