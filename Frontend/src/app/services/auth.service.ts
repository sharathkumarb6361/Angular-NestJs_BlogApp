import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn():boolean{
    return sessionStorage.getItem('loggedin') === '1';
  }
  logout():void{
    sessionStorage.removeItem('loggedin')
  }
}
