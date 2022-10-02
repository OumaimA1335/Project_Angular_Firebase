import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {
  isloggedIn
  constructor(private ps : ProductService,  private router :Router,private af:AngularFireAuth) { }

  ngOnInit(): void {
  }
  logout(){
    this.af.signOut()
    .then(()=> {
      console.log("logout done")
      this.isloggedIn= false;
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      localStorage.removeItem("userConnect")
      window.location.reload()
    
  
    })
    .catch(()=>{
      console.log("error")
    })
    this.router.navigate(['/'])
  }
  navi()
  {
    this.ps.ProfilePage()
  }

}
