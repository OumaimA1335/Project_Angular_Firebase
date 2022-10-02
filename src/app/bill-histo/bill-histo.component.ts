import { AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceService } from './../authService/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-histo',
  templateUrl: './bill-histo.component.html',
  styleUrls: ['./bill-histo.component.css']
})
export class BillHistoComponent implements OnInit {
Uid
getProducts
dataArray
  constructor(private as:AuthserviceService,private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.Uid=localStorage.getItem("userConnect")

    
     console.log("mrigill")
     console.log(this.Uid)
     this.getProducts= this.fs.collection("Bill").doc(this.Uid).collection("BillUser").snapshotChanges().subscribe((data)=>{
       this.dataArray= data.map(element=>{
       
         return{ 
           id:element.payload.doc.id ,
           quantite:element.payload.doc.data()['quantite'],
           pay:element.payload.doc.data()['pay'],
           total:element.payload.doc.data()['total'],
           articles:element.payload.doc.get("articles"),
        }
       
        })
      
     
      })
    
  
    
  }
  objectValues(obj) 
{
    return Object.values(obj);
}

}
