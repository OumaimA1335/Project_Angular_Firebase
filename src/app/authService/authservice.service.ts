import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: Observable<firebase.User>;
  public loggedUser:string;
   isloggedIn: Boolean = false;
  constructor(private fa:AngularFireAuth) 
  {  this.user=this.fa.user}

  signUp(email,password){
    this.isloggedIn = true;
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    return this.fa.createUserWithEmailAndPassword(email,password)  
     }
     signIn(email,password){
      this.isloggedIn = true;
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
       return this.fa.signInWithEmailAndPassword(email,password)
     }
}
