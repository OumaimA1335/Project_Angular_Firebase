import { ProductService } from './produit service/product.service';
import { AuthserviceService } from './authService/authservice.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Produit } from './model/Produit.model';
import { ProduitService } from './produit service/produit.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queen';
  produits :Produit[]
  isUser
  isAdmin=false
  isloggedIn
  constructor(private router :Router,private af:AngularFireAuth,private as:AuthserviceService, private ps : ProductService)
   { 
    this.as.user.subscribe(user=>{
      if(user){
        this.isUser=true
        if(user.uid=="bNO1Z7E7O6RUfXTtkq5le2HbRH42")
        {
          this.isAdmin=true
          console.log(this.isAdmin)
        }
      }else{
        this.isUser=false
      }
    })
  
   }
   

  onChange() {
    if(parseFloat((<HTMLSelectElement> document.getElementById("search")).value)>0)
    {
      this.produits = this.ps.rechercherParPrix(parseFloat((<HTMLSelectElement> document.getElementById("search")).value));
      this.router.navigate(['recherche/']);
    }
    else
    {
      let conf=confirm("You have to enter a positive value")
    }
   
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
