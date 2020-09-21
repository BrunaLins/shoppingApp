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
  category:string;
  
  
  

  constructor(private  produitService:ProduitService) { }

  ngOnInit() {
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
        produit.nom.toLowerCase().includes(userSearchText));       
      //  (contact.first + " " + contact.last).toLowerCase().includes(userSearchText)
  }

  showProduitsMeat(){
  
    let produitsMeat;
    produitsMeat=this.produits.filter(element=>element.category=='meat');

   // let produitsVegetable= this.produitsVegetable;  
    console.log(produitsMeat);       
    return produitsMeat;
  }
   showProduitsVegetable(){
    
      var produitsVegetable;
      produitsVegetable=this.produits.filter(element=>element.category=='vegetable');
  
     // let produitsVegetable= this.produitsVegetable;  
      console.log(produitsVegetable);       
      return produitsVegetable;
    }
    showProduitsFruit(){
      let produitsFruit;
      produitsFruit=this.produits.filter(element=>element.category=='fruit');
  
     // let produitsVegetable= this.produitsVegetable;  
      console.log(produitsFruit);       
      return produitsFruit;
    }
    showProduitsDrink(){
      let produitsDrink;
      produitsDrink=this.produits.filter(element=>element.category=='drink');
  
     // let produitsVegetable= this.produitsVegetable;  
      console.log(produitsDrink);       
      return produitsDrink;
    }
    showProduitsOthers(){
      let produitsOthers;
      produitsOthers=this.produits.filter(element=>element.category=='others');
  
     // let produitsVegetable= this.produitsVegetable;  
      console.log(produitsOthers);       
      return produitsOthers;
    }
  
  }

 
  