import { AuthserviceService } from './authservice.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private as:AuthserviceService,private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean>
  {
    return new Promise(resolve=>{
      this.as.user.subscribe(user=>{
        if(user){
          resolve(true)
        }else{
          this.route.navigate(['/'])
          resolve(false)
        }
      })
  })
  }
}
