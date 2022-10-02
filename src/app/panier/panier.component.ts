import { AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceService } from './../authService/authservice.service';
import { ProductService } from './../produit service/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit.model';
import { ProduitService } from '../produit service/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier : Produit[];
  selectedDay: number ;
  total:number;
  prix:number
  somme:number
  quantite : number[];
  p=new Produit();
 Uid
 getProducts
 dataArray
  
   constructor(private fs:AngularFirestore,private router :Router,private ps :ProductService, private as :AuthserviceService) { 
    this.panier=this.ps.panier
    this.total=0;
    this.selectedDay=0;
    this.prix=0;
    this.somme=0;
    this.quantite=[]
 
  
  }

  ngOnInit(): void {
    if(this.as.isloggedIn!=false)
    { 
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
    else
    {
      return this.dataArray=this.ps.panier
    }
  }
  delete(id,prod){
    
    this.Uid=localStorage.getItem("userConnect") 
    console.log(id)
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.ps.supprimerPanier(prod)
    this.fs.collection("cart").doc(this.Uid).collection("product").doc(id).delete()
   
  }

 selectChangeHandler (eventt: any,prod) {
  
  this.selectedDay = eventt.target.value;
  if(this.selectedDay>0)
  {
    this.quantite.push(this.selectedDay);
    this.prix=parseFloat(prod.prixArt)*this.selectedDay;
    this.total  +=this.prix;
    console.log(prod)
  }
  else
  {
    let conf=confirm("Check what you enter")
  }
 
  return this.total;

}
recuperer ()
{ 
 
   
    return this.total
}
affichetotal(total ,quantite)
  {   if(this.as.isloggedIn==true)
    {
      this.ps.affichetotal(total,quantite);
      this.router.navigate(['checkout/']);
    }
    else
    {
      this.router.navigate(['/sign-up']);
    }
   
  }

}
