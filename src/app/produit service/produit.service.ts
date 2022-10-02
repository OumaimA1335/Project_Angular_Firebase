import { Injectable } from '@angular/core';
import { Produit } from '../model/Produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 produits : Produit[];
 panier : Produit[];
 Bague :Produit[];
 Boucles:Produit[];
 Bracelets:Produit[];
 Necklaces:Produit[];
 WishList:Produit[];
 produitsRecherche:Produit[];
 ProductPage:Produit;
 somme:number;
 qt:number[];
  constructor() {
   this.produits=[
      
    {idNumber:"bague",nomProduit:"Lorem ipsum dolor",prixProduit:30.000,image:"/assets/Bague/b1.jpeg", solde:{id:"Ring",promo:true , price:20}},
    {idNumber:"bague",nomProduit:"cupidatat non proident",prixProduit:20.000,image:"/assets/Bague/b2.jpeg",solde:{id:"Ring",promo:true , price:20}},
    {idNumber:"bague",nomProduit:"Duis aute irure",prixProduit:20.000,image:"/assets/Bague/b3.jpg",solde:{id:"Ring",promo:false, price:0}},
    {idNumber:"bague",nomProduit:"magna aliqua",prixProduit:25.000,image:"/assets/Bague/b4jpg.jpg",solde:{id:"Ring",promo:false, price:0}},
    {idNumber:"boucles",nomProduit:"Dior - Earings",prixProduit:10.000,image:"/assets/Boucles/b1.jpeg",solde:{id:"Earings",promo:true, price:30}},
    {idNumber:"boucles",nomProduit:"Emerald Earings",prixProduit:20.000,image:"/assets/Boucles/b2.jpeg",solde:{id:"Earings",promo:true , price:30  }},
    {idNumber:"boucles",nomProduit:"Fold Earings",prixProduit:15.000,image:"/assets/Boucles/b3.jpeg",solde:{id:"Earings",promo:false, price:0}},
    {idNumber:"boucles",nomProduit:"golden earrings",prixProduit:25.000,image:"/assets/Boucles/b4.jpeg",solde:{id:"Earings",promo:false, price:0}},
    {idNumber:"bracelet",nomProduit:"bracelet cheville lovers",prixProduit:25.000,image:"/assets/Braclets/b1.jpeg",solde:{id:"Bracelet",promo:false,price:0}},
    {idNumber:"bracelet",nomProduit:"Bracelet flower",prixProduit:25.000,image:"/assets/Braclets/b2jpeg.jpeg",solde:{id:"Bracelet",promo:false , price:0}},
    {idNumber:"bracelet",nomProduit:"All diamand Bracelets",prixProduit:35.000,image:"/assets/Braclets/b3.jpeg",solde:{id:"Bracelet",promo:true, price:40}},
    {idNumber:"bracelet",nomProduit:"bracelets 6p",prixProduit:15.000,image:"/assets/Braclets/b4.jpeg",solde:{id:"Bracelet",promo:true , price:40}},
    {idNumber:"colliers",nomProduit:"Combaned Necklace",prixProduit:25.000,image:"/assets/colliers/c1.jpeg",solde:{id:"Necklace",promo:false , price:0}},
    {idNumber:"colliers",nomProduit:"Babe necklace",prixProduit:15.000,image:"/assets/colliers/c2.jpeg",solde:{id:" necklace",promo:false , price:0}},
    {idNumber:"colliers",nomProduit:"Fall in love Necklace",prixProduit:16.000,image:"/assets/colliers/c3.jpg",solde:{id:"Necklace",promo:true, price:50}},
    {idNumber:"colliers",nomProduit:"Gold Chain - Pack",prixProduit:17.000,image:"/assets/colliers/c4.jpg",solde:{id:"Necklace",promo:true, price:50}},

   ]
   this.panier=[
   /// {idNumber:1,nomProduit:"Lorem ipsum dolor",prixProduit:30.000,image:"/assets/Bague/b1.jpeg"},
   ]
   this.Bague=[
    {idNumber:"bague",nomProduit:"Lorem ipsum dolor",prixProduit:30.000,image:"/assets/Bague/b1.jpeg", solde:{id:"Ring",promo:true , price:20}},
    {idNumber:"bague",nomProduit:"cupidatat non proident",prixProduit:20.000,image:"/assets/Bague/b2.jpeg",solde:{id:"Ring",promo:true, price:20}},
    {idNumber:"bague",nomProduit:"Duis aute irure",prixProduit:20.000,image:"/assets/Bague/b3.jpg",solde:{id:"Ring",promo:false , price:0}},
    {idNumber:"bague",nomProduit:"magna aliqua",prixProduit:25.000,image:"/assets/Bague/b4jpg.jpg",solde:{id:"Ring",promo:false, price:0}},
    {idNumber:"bague",nomProduit:"magna",prixProduit:25.000,image:"/assets/Bague/b5.jpg",solde:{id:"Ring",promo:false, price:0}},
    {idNumber:"bague",nomProduit:"aliqua",prixProduit:25.000,image:"/assets/Bague/b6jpg.jpg",solde:{id:"Ring",promo:false , price:0}},

   ]
   this.Boucles=[
    {idNumber:"boucles",nomProduit:"Dior - Earings",prixProduit:10.000,image:"/assets/Boucles/b1.jpeg",solde:{id:"Earings",promo:true , price:30}},
    {idNumber:"boucles",nomProduit:"Emerald Earings",prixProduit:20.000,image:"/assets/Boucles/b2.jpeg",solde:{id:"Earings",promo:true , price:30}},
    {idNumber:"boucles",nomProduit:"Fold Earings",prixProduit:15.000,image:"/assets/Boucles/b3.jpeg",solde:{id:"Earings",promo:false, price:0}},
    {idNumber:"boucles",nomProduit:"golden earrings",prixProduit:25.000,image:"/assets/Boucles/b4.jpeg",solde:{id:"Earings",promo:false , price:0}},
    {idNumber:"boucles",nomProduit:"golden ",prixProduit:25.000,image:"/assets/Boucles/b5.jpeg",solde:{id:"Earings",promo:false , price:0}},
    {idNumber:"boucles",nomProduit:"earrings",prixProduit:25.000,image:"/assets/Boucles/b6.jpeg",solde:{id:" Earings",promo:false , price:0}},


   ]
   this.Bracelets=[
    {idNumber:"bracelet",nomProduit:"bracelet cheville lovers",prixProduit:25.000,image:"/assets/Braclets/b1.jpeg",solde:{id:"bracelet ",promo:false , price:0}},
    {idNumber:"bracelet",nomProduit:"Bracelet flower",prixProduit:25.000,image:"/assets/Braclets/b2jpeg.jpeg",solde:{id:"Bracelet ",promo:false , price:0}},
    {idNumber:"bracelet",nomProduit:"All diamand Bracelets",prixProduit:35.000,image:"/assets/Braclets/b3.jpeg",solde:{id:"Bracelets",promo:true , price:40}},
    {idNumber:"bracelet",nomProduit:"bracelets 6p",prixProduit:15.000,image:"/assets/Braclets/b4.jpeg",solde:{id:"bracelets",promo:true , price:40}},
    {idNumber:"bracelet",nomProduit:"bracelets ",prixProduit:15.000,image:"/assets/Braclets/b5.jpg",solde:{id:"bracelets",promo:false, price:0}},
    {idNumber:"bracelet",nomProduit:"bracelets queen",prixProduit:15.000,image:"/assets/Braclets/b6.jpeg",solde:{id:"bracelets ",promo:false, price:0}},

   ]
   this.Necklaces=[
    {idNumber:"colliers",nomProduit:"Combaned Necklace",prixProduit:25.000,image:"/assets/colliers/c1.jpeg",solde:{id:"Necklace",promo:false , price:0}},
    {idNumber:"colliers",nomProduit:"Babe necklace",prixProduit:15.000,image:"/assets/colliers/c2.jpeg" ,solde:{id:" necklace",promo:false , price:0}},
    {idNumber:"colliers",nomProduit:"Fall in love Necklace",prixProduit:16.000,image:"/assets/colliers/c3.jpg",solde:{id:"Necklace",promo:true, price:50}},
    {idNumber:"colliers",nomProduit:"Gold Chain - Pack",prixProduit:17.000,image:"/assets/colliers/c4.jpg",solde:{id:"Neckclace",promo:true, price:50}},
    {idNumber:"colliers",nomProduit:"Gold  - Pack",prixProduit:17.000,image:"/assets/colliers/c5.jpeg",solde:{id:"Necklace",promo:false, price:0}},
    {idNumber:"colliers",nomProduit:"bronze - Pack",prixProduit:17.000,image:"/assets/colliers/c6.jpg" ,solde:{id:"Necklace",promo:true , price:0}},

   ]
  
  this.WishList=[]

  }
   listeProduit():Produit[]
   {
     return this.produits;
   }
   listeBoucles():Produit[]
   {
     return this.Boucles;
   }
   listeBague():Produit[]
   {
     return this.Bague;
   }
   listeNeklaces():Produit[]
   {
     return this.Necklaces;
   }
   listeBracelets():Produit[]
   {
     return this.Bracelets;
   }
   listePanier():Produit[]
   {
     return this.panier;
   }
   ajouterProduit(prod :Produit)
   {
     this.panier.push(prod);
   }
   supprimerProduit( prod: Produit)
   {
    //supprimer le produit prod du tableau produits
    const index = this.panier.indexOf(prod, 0);
    if (index > -1) {
    this.panier.splice(index, 1);
    }
   }

   afficheProduct(prod : Produit)
   {
    this.ProductPage=prod ;
   }
   Affichage():Produit
   {
     return this.ProductPage;
   }
   ajouterfavourite(love :Produit)
   {
     this.WishList.push(love);
   }
   listerFavourute():Produit[]
   {
     return this.WishList;
   }
   supprimerWishList( prod: Produit)
   {
    //supprimer le produit prod du tableau produits
    const index = this.WishList.indexOf(prod, 0);
    if (index > -1) {
    this.WishList.splice(index, 1);
    }
  }
  affichetotal(total ,quantite )
   {
    this.somme=total ;
    this.qt=quantite ;
   
   }
   returnsom()
   { 
    return this.somme;

   }
   returnqt()
   { 
    return this.qt;

   }
   rechercherParCategorie(NomCat: String):Produit[]{
    this.produitsRecherche = [];
     console.log(NomCat)
     
    this.produits.forEach((cur, index) => {
    if(NomCat == cur.solde.id) {
      if(cur.solde.promo)
      {
        console.log("cur "+cur);
        this.produitsRecherche.push(cur);
      }
   
    }
  });
  return this.produitsRecherche;
 }
 returnTabRech()
 {
  return this.produitsRecherche;
 }

}
