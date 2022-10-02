import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from './../produit service/product.service';
import { Produit } from './../model/Produit.model';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit service/produit.service';
import { Facture } from '../model/Facture.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  somme : number
  qt:number[];
  ModPaiement :String;
  Uid
  getProducts
  successMessage
  dataArray=[]
  constructor(private ps :ProductService, private fs:AngularFirestore, private router : Router)
   {  
      this.somme=ps.somme;
      this.qt=ps.qt;
     
  }

  ngOnInit(): void {
    this.Uid=localStorage.getItem("userConnect") 
    this.getProducts= this.fs.collection("cart").doc(this.Uid).collection("product").snapshotChanges().subscribe((data)=>{
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
  ModePaiement(event)
  {
     this.ModPaiement=event.target.value;
   if(this.ModPaiement=="Bank")
   {
    let num = prompt("enter your card numero");
    let code = prompt("enter you card code");
    if(num.length==8 && code.length==4)
    {
      let conf=confirm("sucessfull of the operation ")
    }
    else
    {
      let conf=confirm("check what you enter")
    }
   }
   else if (this.ModPaiement=="PayPal")
   {
    let num = prompt("enter you paypal numero");
    let code = prompt("enter your code paypal");
    if(num.length==8 && code.length==4)
    {
      let conf=confirm("sucess of the operation")
    }
    else
    {
      let conf=confirm("check what you enter")
    }
   }
   else
   {
    let ad = prompt("Enter your adress ?");
    if(ad.length>10)
    {
      let conf=confirm("your adress saved ");
    }
    else
    {
      let conf=confirm("check what you enter");
    }
   
   }
  }
  order()
  {
    this.fs.collection("order").doc(this.Uid).set(
      {
        articles :this.dataArray,
        quantite:this.qt,
        total :this.somme,
        pay:this.ModPaiement
      }
    )
    console.log(this.Uid)
    this.fs.collection("cart").doc(this.Uid).delete()
    this.successMessage='Order done!'
    console.log("done")
    this.router.navigate(['/articles']);
  }
 
 
}
