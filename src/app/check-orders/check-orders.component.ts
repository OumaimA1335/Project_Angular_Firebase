import { ProductService } from './../produit service/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.css']
})
export class CheckOrdersComponent implements OnInit {
getProducts
dataArray
dataobject
Uid
tab

  constructor(private fs:AngularFirestore, private ps :ProductService) { }

  ngOnInit(): void {
    this.Uid=localStorage.getItem("userConnect")
      this.getProducts= this.fs.collection("order").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
          console.log(this.Uid)  
          console.log("helloe")    
        return{ 
          id:element.payload.doc.id ,
         quantite:element.payload.doc.data()['quantite'],
         pay:element.payload.doc.data()['pay'],
         total:element.payload.doc.data()['total'],
         articles:element.payload.doc.get("articles"),
        
       
         // somme:element.payload.doc.data()['prixArt'],
       }
       }) 
     })
  }


objectValues(obj) 
{
    return Object.values(obj);
}
addbill(item)
{
  this.ps.addbill(item)
}
 
 }


