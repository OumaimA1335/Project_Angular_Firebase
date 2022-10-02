import { ProductService } from './../produit service/product.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.css']
})
export class EarringsComponent implements OnInit {
  earrings 
 
  constructor(private produitservice: ProduitService ,private router :Router,private ps :ProductService)
   {  

     this.earrings=this.ps.listEarrings()
   }

  ngOnInit(): void { }
 
  addProduit(newProduit)
  {
    this.ps.addToCart(newProduit)
    this.router.navigate(['panier/']);
  }
  afficheProduct(product)
  {
    this.ps.getProduct(product)
    this.router.navigate(['product-page/']);
  }

}
