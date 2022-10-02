import { AuthserviceService } from './../authService/authservice.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
wishList =[];
dataArray=[]
getProducts:Subscription
Uid
  constructor(private produitservice: ProduitService, private ps : ProductService,private fs:AngularFirestore, private as : AuthserviceService)
   {  
    
   }

  ngOnInit(): void {
    if(this.as.isloggedIn!=false)
    { 
    this.Uid=localStorage.getItem("userConnect") 
    this.getProducts= this.fs.collection("wishList").doc(this.Uid).collection("Favproduct").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
          console.log(this.Uid)      
        return{ 
          id:element.payload.doc.id ,
          nameArt:element.payload.doc.data()['nameArt'],
          prixArt:element.payload.doc.data()['prixArt'],
          imgArt:element.payload.doc.data()['imgArt'],
       }
       }) 
     })
     
    }
    else
    {
      return this.dataArray=this.ps.wishlist
    }
   } 
   
   delete(id){
    this.Uid=localStorage.getItem("userConnect") 
    console.log(id)
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("wishList").doc(this.Uid).collection("Favproduct").doc(id).delete()
  }
  
   
  
  supprimerfavourite(p: Produit)
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitservice.supprimerWishList(p);
  }
}
