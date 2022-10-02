import { Router } from '@angular/router';
import { AuthserviceService } from './../authService/authservice.service';
import { BraceletsComponent } from './../bracelets/bracelets.component';
import { RingsComponent } from './../rings/rings.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product 
dataArray=[]
earrings
Rings
Bracelets
Necklaces
panier
wishlist
somme
qt
Uid
getProducts:Subscription
userSubscribe:Subscription
getWishList
produitsRecherche
price
montant
  constructor(private fs:AngularFirestore, private as :AuthserviceService , private router :Router) {
     this.earrings=[]
     this.dataArray=[]
     this.Bracelets=[]
     this.Necklaces=[]
     this.Rings=[]
     this.panier=[]
     this.wishlist=[]
    
     this.Uid=localStorage.getItem("userConnect") 
     
    
   }

  getProduct(p)
  {
    this.product=p;
  }
  
  listBracelets()
  {
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
     this.dataArray.forEach((cur, index) => {
      if(cur.catArt=="Bracelets") {
        this.Bracelets.push(cur) 
      }
    }
  )
  return this.Bracelets
  }
   
  
  listEarrings()
  {
    
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
     this.dataArray.forEach((cur, index) => {
      if(cur.catArt=="earrings") {
        this.earrings.push(cur) 
      }
    }
  )
    return this.earrings
  }
  listRings()
  {
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
     this.dataArray.forEach((cur, index) => {
      if(cur.catArt=="Rings") {
        this.Rings.push(cur) 
      }
    }
  )
    return this.Rings
  }
  listNecklaces()
  {
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
     this.dataArray.forEach((cur, index) => {
      if(cur.catArt=="Necklaces") {
        this.Necklaces.push(cur) 
      }
    }
  )
    return this.Necklaces
  }

  createcart()
  {

    this.Uid=localStorage.getItem("userConnect") 
    console.log(this.Uid)
    if(this.as.isloggedIn== true)
    { 
      console.log("entry")
      console.log(this.Uid)
      this.fs.collection("cart").doc(this.Uid)
    }
  }
  addToCart(p)
  { if(this.as.isloggedIn== true)
    {
      this.fs.collection("cart").doc(this.Uid).collection("product").add(p)
      console.log("sucess")
    }
    this.panier.push(p)
    return this.panier
  }
  createWishList()
  {  
    this.Uid=localStorage.getItem("userConnect") 
    if(this.as.isloggedIn== true)
    { 
      console.log("entry")
      console.log(this.Uid)
      this.fs.collection("WishList").doc(this.Uid)
    }
  }
  addToWishList(p)
  { 
    if(this.as.isloggedIn== true)
    {
      this.fs.collection("wishList").doc(this.Uid).collection("Favproduct").add(p)
      console.log("sucess")
    }
    this.wishlist.push(p)
    return this.wishlist
  }
  affichetotal(total ,quantite )
   {
    this.somme=total ;
    this.qt=quantite ;
    return this.somme,this.qt
   }
   addbill(item)
   {
    this.Uid=localStorage.getItem("userConnect") 
    this.fs.collection("Bill").doc(this.Uid).collection("BillUser").add(item)
    console.log("sucess")
    this.fs.collection("order").doc(item.id).delete()
    console.log("mrigill")
   }
   
   ProfilePage()
   { 
    this.Uid=localStorage.getItem("userConnect") 
     if(this.Uid=="bNO1Z7E7O6RUfXTtkq5le2HbRH42")
     {
      this.router.navigate(['/dashbord-admin']);
     }
     else
     {
      this.router.navigate(['/profile-user']);
     }
   }
   rechercherParPrix(prix){
    this.produitsRecherche = [];
     console.log(prix)
     parseFloat(prix)
    
     this.getProducts= this.fs.collection("products").snapshotChanges().subscribe((data)=>{
      this.price= data.map(element=>{
         return{
          nameArt:element.payload.doc.data()['nameArt'],
          imgArt:element.payload.doc.data()['imgArt'],
          prixArt:element.payload.doc.data()['prixArt']
         }
         }
      )
      console.log(this.price)
      this.price.forEach((cur) => {
        if(prix >= parseFloat(cur.prixArt)) {
            console.log("cur "+cur);
            this.produitsRecherche.push(cur);
        }
      });
    }

    )
   console.log(this.produitsRecherche)
  return this.produitsRecherche;
 }
 supprimerPanier(p)
 {
   this.panier.pop(p)
 }
  
}
