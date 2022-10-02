import { AuthserviceService } from './../authService/authservice.service';
import { ProductService } from './../produit service/product.service';
import { Router } from '@angular/router';
import { ProduitService } from './../produit service/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
product 
prix :number;
selectedDay : number;
quantite : number[];
  constructor(private router:Router , private ps : ProductService, private as :AuthserviceService)
   { 
     this.product=ps.product;
     this.selectedDay=0;
     this.prix=0;
     this.quantite=[];
   }

  ngOnInit(): void {
  }
  addfavorite(newProduit)
  {
    this.ps.addToWishList(newProduit)
    this.router.navigate(['/wish-list']);
  }
  addProduit(newProduit)
  {
    this.ps.addToCart(newProduit)
    this.router.navigate(['panier/']);
  }
  selectChangeHandler (event:any) {
  
    this.selectedDay = event.target.value;
    this.quantite.push(this.selectedDay);
    this.prix=  parseFloat(this.product.prixArt)*this.selectedDay;
    console.log(this.prix)
    console.log(this.selectedDay)
    return (this.prix , this.quantite);
  
  }
  affichetotal(prix ,quantite)
  { 
    if(this.as.isloggedIn==true)
    
    {
      this.ps.affichetotal(prix,quantite);
    this.ps.addToCart(this.product);
    this.router.navigate(['/checkout']);
    }
    
  }
 
}
