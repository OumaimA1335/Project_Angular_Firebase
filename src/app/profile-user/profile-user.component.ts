import { ProductService } from './../produit service/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  successUpdate
  getuser :Subscription
  user={
    flName:'',
    email:'',
    phone:'',
    town:'',
    password:'',
    uid:''

  }
  constructor(private ps : ProductService,private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.fs.collection("users").ref.doc(localStorage.getItem("userConnect")).get().then((data)=>{
      console.log(data.data())
      this.user.flName=data.data()['flName']
      this.user.email=data.data()['email']
      this.user.phone=data.data()['phone']
      this.user.town=data.data()['town']
      this.user.password=data.data()['password']
      this.user.uid=localStorage.getItem("userConnect")
    })
  }
  update(){
    this.fs.collection("users").doc(this.user.uid).update({
      flName:this.user.flName,
      email:this.user.email,
      phone:this.user.phone,
      town:this.user.town,
      password:this.user.password,
    }).then(()=>{
      this.successUpdate="updated!"
     
   
    })
  }

}
