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
  prixTotal = 0;
  

  constructor(private  produitService:ProduitService) {
    console.log(this);
    console.log(this.paniers);
   }

  ngOnInit(){
  this.produits= this.produitService.getProduits();
  this.paniers = this.produitService.getPaniers();
  //this.prixTotal = this.produitService.getTotal();
  
 // this.price= this.produitService.getPrices();
  }

  removeProduitInPaniersDb(produit){
    this.produitService.removeProduitInPaniersDb(produit);
  }

  calculTotalPrice(panier){
    var value = 0; 
    var total = 0;
    panier.forEach(element => {
      value = element.price;
      total += value;
    });
    return total;
  }

  

   /*calculTotalPrice(){
    this.produitService.calculTotalPrice();
    this.total = this.produitService.calculTotalPrice();
    console.log(this.total);}*/
}


