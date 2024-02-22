import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
    constructor(private cookieService: CookieService) { }

    getAuthStatus () {
        return this.cookieService.get('session_id');
    }
}
