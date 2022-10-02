import { AuthserviceService } from './../authService/authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  messageError
  constructor(private sa:AuthserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  login(f){
    let data=f.value
    this.sa.signIn(data.email,data.password)
    .then((user)=>{
     console.log("login")
     if(user.user.email=='chellyoumaima70@gmail.com')
     {   localStorage.setItem("userConnect",user.user.uid)
      this.route.navigate(['/dashbord-admin'])}
     else
     {
      localStorage.setItem("userConnect",user.user.uid)
      this.route.navigate(['/home'])
     }
   
  })
    .catch(()=>{
      
      this.messageError="Incorrect email and password"
    })

  }

}
