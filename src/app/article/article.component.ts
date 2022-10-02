import { ProductService } from './../produit service/product.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ProduitService } from './../produit service/produit.service';
import { Produit } from './../model/Produit.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  //newProduit = new Produit();
  produits :Produit[];
  dataArray
  getProducts:Subscription
  constructor(private fs:AngularFirestore,private router :Router, private ps :ProductService) { 
   this.dataArray=[]

  }

  ngOnInit(): void {
    this.getProducts= this.fs.collection("products").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          nameArt:element.payload.doc.data()['nameArt'],
          prixArt:element.payload.doc.data()['prixArt'],
          imgArt:element.payload.doc.data()['imgArt'],
          qtArt:element.payload.doc.data()['qtArt'],
          catArt:element.payload.doc.data()['catArt'],
       }
       })
     })
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
