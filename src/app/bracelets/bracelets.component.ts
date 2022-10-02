import { ProductService } from './../produit service/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {
 bracelet 
  constructor(private produitservice: ProduitService ,private router :Router,private ps :ProductService)
   {     this.bracelet=ps.listBracelets()}

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
