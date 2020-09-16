import { Component, OnInit } from '@angular/core';
import { ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  title:string;
  produits:Array<any>;
  paniers:Array<any>;

  constructor(private  produitService:ProduitService) { }

  ngOnInit():  void{
    this.produits= this.produitService.getProduits();
    this.paniers=this.produitService.getPaniers();
    
  }
 
  deleteProduit(produit) {

    if (confirm("voulez vous supprimer ce produit ?") == true) {
     this.produits = this.produitService.getProduits();
     this.produitService.deleteProduit(produit);
     
    }

  } 
  
 

  addProduitToPaniers(produit) {
    this.produitService.addProduitToPaniersDb(produit);
  }
  searchProduit(userSearchText) {
    console.log(userSearchText);
    userSearchText = userSearchText.toLowerCase();
    //recuperer la saisie de l'utilisateur
    this.produits = this.produitService.getProduits()
      .filter((produit) =>
        produit.nom.toLowerCase().includes(userSearchText) 
      
      );
  }



}
