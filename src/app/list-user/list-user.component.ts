import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  dataArray
  getProducts:Subscription
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.getProducts= this.fs.collection("users").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          flName:element.payload.doc.data()['flName'],
          password:element.payload.doc.data()['password'],
          email:element.payload.doc.data()['email'],
          phone:element.payload.doc.data()['phone'],
          town:element.payload.doc.data()['town']
       }
       })
     })
  }
  delete(id){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("users").doc(id).delete()
  }

}
