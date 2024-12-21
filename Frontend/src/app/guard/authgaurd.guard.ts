import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn:'root',
})

export class AuthGaurd implements CanActivate{
  constructor(private authservice:AuthService,private router:Router){}
canActivate(): boolean {
   if (this.authservice.isLoggedIn()){
    return true;
   }
   this.router.navigate(['/signin'])
   return false;
}
}