import { AuthserviceService } from './../authService/authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private sa:AuthserviceService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f){
    console.log(f.value)
    let data=f.value
     this.sa.signUp(data.email,data.password).then((user)=>{
      localStorage.setItem("userConnect",user.user.uid)
       this.fs.collection("users").doc(user.user.uid).set({
         flName:data.flName,
         email:data.email,
         phone:data.phone,
         town:data.town,
         password:data.password,
         uid:user.user.uid,
       }).then(()=>{
 
         this.route.navigate(['/'])
       })
     }).catch(()=>{
       console.log("error !")
     })
   }
}
