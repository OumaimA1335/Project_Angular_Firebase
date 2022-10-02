import { Router } from '@angular/router';
import { ProductService } from './../produit service/product.service';
import { AuthserviceService } from './../authService/authservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  dataArray
  getProducts:Subscription
  constructor(private fs:AngularFirestore,private as:AuthserviceService, private ps:ProductService , private router :Router) { }

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
  delete(id){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("products").doc(id).delete()
  }
  updateProduct(item)
  {
    console.log(item)
   this.ps.getProduct(item)
   this.router.navigate(['/update-product']);
  }


}
