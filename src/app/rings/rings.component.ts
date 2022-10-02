import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {
  rings 
  constructor(private produitservice: ProduitService ,private router :Router,private ps :ProductService)
   {  this.rings=ps.listRings() }

  ngOnInit(): void {
  }
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
