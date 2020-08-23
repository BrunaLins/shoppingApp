import { Component, OnInit } from '@angular/core';
import { ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  

  totalPrice:number;

  constructor(private  produitService:ProduitService) { 

  }

  ngOnInit():void {      
   
    this.totalPrice= this.produitService.getPrices();
    
  
  }
  calculTotalPrice() {
      this.produitService.calculTotalPrice();
      
    }
  
  }


