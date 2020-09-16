import { Component, OnInit } from '@angular/core';
import { ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  // on declare nos variables;
  title:string;
  produits:Array<any>;
  paniers:Array<any>;
  price:number;
  total:number;
  

  constructor(private  produitService:ProduitService) {
    console.log(this);
   }

  ngOnInit(){
  this.produits= this.produitService.getProduits();
  this.paniers = this.produitService.getPaniers();  
 // this.price= this.produitService.getPrices();
  
  
  }

  removeProduitInPaniersDb(produit){
    this.produitService.removeProduitInPaniersDb(produit);
  }
   /*calculTotalPrice(){
    this.produitService.calculTotalPrice();
    this.total = this.produitService.calculTotalPrice();
    console.log(this.total);}*/

  
 
}


