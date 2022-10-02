import { Produit } from "./Produit.model";

export class Facture
{
    Fname :String;
    LastName : String;
    phone :String;
    Articles :Produit[];
    Quantite : number[];
    ModePaiment:String;
    Total :number;
}