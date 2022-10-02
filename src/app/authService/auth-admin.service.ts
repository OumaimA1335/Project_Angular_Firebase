import { AuthserviceService } from './authservice.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate {

  constructor(private as:AuthserviceService,private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean>
  {
    return new Promise(resolve=>{
      this.as.user.subscribe(user=>{
        if(user && user.uid=="bNO1Z7E7O6RUfXTtkq5le2HbRH42"){
          resolve(true)
        }else{
          this.route.navigate(['/'])
          resolve(false)
        }
      })
  })
  }
}
