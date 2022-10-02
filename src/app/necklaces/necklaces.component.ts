import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.css']
})
export class NecklacesComponent implements OnInit {
  necklaces 
  constructor(private produitservice: ProduitService ,private router :Router,private ps :ProductService) 
  {  this.necklaces=ps.listNecklaces()
  }

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
