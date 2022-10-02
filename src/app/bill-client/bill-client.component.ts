import { AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceService } from './../authService/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-client',
  templateUrl: './bill-client.component.html',
  styleUrls: ['./bill-client.component.css']
})
export class BillClientComponent implements OnInit {
  getProducts
  Uid
  dataArray=[]
  data
  constructor(private as:AuthserviceService,private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.Uid=localStorage.getItem("userConnect")

    
     console.log("mrigill")
     console.log(this.Uid)
     this.getProducts= this.fs.collection("Bill").doc("bNO1Z7E7O6RUfXTtkq5le2HbRH42").collection("BillUser").snapshotChanges().subscribe((data)=>{
 
   
      data.map(element=>{
        if(element.payload.doc.data()['id']==this.Uid)
        {
         console.log("wow")
      
         this.data={ 

           id:element.payload.doc.id ,
           quantite:element.payload.doc.data()['quantite'],
           pay:element.payload.doc.data()['pay'],
           total:element.payload.doc.data()['total'],
           articles:element.payload.doc.get("articles"),
           
        }
        this.dataArray.push(this.data)
        console.log()
        }
        })
      
     
      })
    
  
  }

  objectValues(obj) 
  {
      return Object.values(obj);
  }

}
