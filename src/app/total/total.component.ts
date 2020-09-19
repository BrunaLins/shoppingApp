import { Component, OnInit } from '@angular/core';
import { ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  

  
  produits:Array<any>;
  paniers:Array<any>;
  total =0;

  constructor(private  produitService:ProduitService) { 
    
  }

  ngOnInit(){      
    this.produits= this.produitService.getProduits();
    this.paniers=this.produitService.getPaniers();
    
  }


}