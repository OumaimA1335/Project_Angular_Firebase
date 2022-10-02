import { AuthserviceService } from './../authService/authservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  Uid
  successMessage
  constructor(private fs:AngularFirestore,private as:AuthserviceService) { }

  ngOnInit(): void {
  }
  addproduct(f){
    let data=f.value
    console.log(data)
    this.fs.collection("products").add({
      idd:data.idd,
      nameArt:data.nameArt,
      prixArt:data.prixArt,
      imgArt:data.imgArt,
      qtArt:data.qtArt,
      catArt:data.catArt,
    }).then(()=>{
      this.successMessage='added !'
    })
}

}
