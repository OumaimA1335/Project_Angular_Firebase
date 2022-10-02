import { ProductService } from './../produit service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ps :ProductService) {
    this.ps.createWishList()
    this.ps.createcart()
   }

  ngOnInit(): void {
  }

}
