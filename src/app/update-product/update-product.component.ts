import { AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceService } from './../authService/authservice.service';
import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product
  successUpdate
  constructor(private ps : ProductService,private fs:AngularFirestore ) 
  { this.product=this.ps.product}

  ngOnInit(): void {
  }
  update(){
    this.fs.collection("products").doc(this.product.id).update({
      nameArt:this.product.nameArt,
      prixArt:this.product.prixArt,
      imgArt:this.product.imgArt,
      qtArt:this.product.qtArt,
      
    }).then(()=>{
      this.successUpdate="updated!"
     
   
    })
  }

}
