import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  TabPromo :Produit[]
  constructor(private ps :ProductService,private router :Router) 
  {
     this.TabPromo=this.ps.produitsRecherche
   }

  ngOnInit(): void {
  }
  afficheProduct(prod)
  {
    this.ps.getProduct(prod)
    this.router.navigate(['product-page/']);
  }

}
