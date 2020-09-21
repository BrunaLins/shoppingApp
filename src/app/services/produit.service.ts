import { Injectable, ɵConsole } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  paniersDb=[];
  total = 0;
  total_test = 0;
   private produitsDb=[
    
     {id:1,
      nom:"Chicken",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/d082ec54-722d-4e19-bb3c-1b054aff9436.jpg",
      price:8
     },
     {id:2,
      nom:"Turkey",
      catagory:"meat",
      image:"https://www.listchallenges.com/f/items/de26829b-2f14-4aae-a042-742ea2343430.jpg",
      price:7
     },
     {id:3,
      nom:"Saucisson",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/83090b4e-54b1-4840-a4f1-0dd059fe335f.jpg",
      price:3
     },
     {id:4,
      nom:"Ham",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/dcc08d03-f6c9-4aba-aa9b-349ae35c0ae0.jpg",
      price:2
     },
     {id:5,
      nom:"Chorizo",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/80739100-b025-47d9-b8c9-13ebe5c3e97d.jpg",
      price:3
     },
     {id:6,
      nom:"Hotdog",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/c74cf51b-f06d-4670-941d-c070e103316a.jpg",
      price:1.5
     },
     {id:7,
      nom:"Beef",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/4ed95ddc-845c-4eef-9ebb-192f318502b6.jpg",
      price:15
     },
     {id:8,
      nom:"Porc",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/c4341b51-9383-4753-9602-467449205d79.jpg",
      price:10
     },
     {id:9,
      nom:"Fish",
      category:"meat",
      image:"https://www.listchallenges.com/f/items/2f8e9454-7918-4994-843e-a4c7579607ea.jpg",
      price:13
     },
     
     {id:10,
      nom:"Radicchio",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/90dacbb4-279e-4367-9c91-1fb4fcf51416.jpg",
      price:1
     },
     {id:11,
      nom:"Radish",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/a1807d3b-cfe9-4fea-b441-ac3bc60e372c.jpg",
      price:1.5
     },
     {id:12,
      nom:"Salad",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/72b9371d-66b7-422d-8ccb-3decc2d4d678.jpg",
      price:0.99
     },
     {id:13,
      nom:"Lettuce",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/d2f914c2-4ddd-4910-9ed2-f50074edf2ed.jpg",
      price:1.5
     },
     {id:14,
      nom:"Pickle",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/97d4e948-1d9a-4277-bec7-b7af4a28516f.jpg",
      price:1.8
     },
     {id:15,
      nom:"Olive",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/cf932900-3312-42d0-bd40-a236c5deeb56.jpg",
      price:1.9
     },
     {id:16,
      nom:"Eggplant",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/2bac58a9-9055-4ce6-9a2d-ac2fc16e33cb.jpg",
      price:3
     },
     {id:17,
      nom:"Romain Lettuc",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/7f293374-10e9-4330-9671-35610834959a.jpg",
      price:1.5
     },
     {id:18,
      nom:"Spinach",
      category:"vegetable",
      image:"https://www.listchallenges.com/f/items/1b2776fc-1705-4482-ab07-bae99adcaf59.jpg",
      price:2
     },
     
     {id:19,
      nom:"Lemon",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/773baa99-4810-4df6-8002-3ec6c1e5a815.jpg",
      price: 0.6
     },
     {id:20,
      nom:"Apple",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/186cf869-b2f4-4b95-94dd-2bb745e2620c.jpg",
      price:3.99
     },
     {id:21,
      nom:"Banana",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/98b9ea10-149c-4d27-ba2c-96ee41f167b3.jpg",
      price:1
     },
     {id:22,
      nom:"Grape",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/f1a0f286-a3f9-4968-b163-d2940dd8882f.jpg",
      price:2.5
     },
     {id:23,
      nom:"Grapefruit",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/3dd495ca-7659-43fa-a19f-bd5b104bcfb6.jpg",
      price:1.7
     },
     {id:24,
      nom:"Lime",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/44d8171c-d432-41e1-a1ff-dd2b56d5b520.jpg",
      price:1
     },
     {id:25,
      nom:"Cherry",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items-dl/9221bcdf-d160-4a12-ad53-21dc9d2154c6.jpg",
      price:3
     },
     {id:26,
      nom:"Pomegranate",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/8bc73d43-8da4-44e4-9ccf-6bf5a409ef57.jpg",
      price:2.5
     },
     {id:27,
      nom:"Mango",
      category:"fruit",
      image:"https://www.listchallenges.com/f/items/99d09e92-ae17-426d-b71c-0377609d57a4.jpg",
      price:2.9
     },
     
     {id:28,
      nom:"Energy Drink",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/66ef3b51-cf10-4b36-86de-a2232e4d9c27.jpg",
      price:0.8
     },
     {id:29,
      nom:"Tea",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/b94c7f98-dd15-4a7b-838b-6bbdbf8dc112.jpg",
      price:3
     },
     {id:30,
      nom:"Cafe",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/c98df8da-f704-446a-acfd-0bfb9d5ecfb6.jpg",
      price:2.9
     },
     {id:31,
      nom:"Milk",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/a1431585-404b-4533-99e9-b330f09debd3.jpg",
      price:0.84
     },
     {id:32,
      nom:"Starbucks",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/ad8af6e8-61aa-4968-8ef9-f8f40680040c.jpg",
      price:3
     },
    {id:34,
      nom:"Apple Juice",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/52b46eaa-fcfd-4e7d-b24d-1d8c94ecab22.jpg",
      price:1.9
     },
     {id:35,
      nom:"Orange Juice",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/c0797cbc-84ba-43da-b3e1-3e4d6c1d02c9.jpg",
      price:2
     },
     {id:36,
      nom:"Vitamin Drink",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/1899e31b-947b-44b3-a160-ef8e2181e67a.jpg",
      price:1.9
     },
     {id:37,
      nom:"Soda",
      category:"drink",
      image:"https://www.listchallenges.com/f/items/9f3d707a-8295-43a3-97a9-85703f60bd5a.jpg",
      price:2.9
     },
    
     {id:38,
      nom:"Tabasco",
      category:"others",
      image:"https://www.listchallenges.com/f/items/e27886c3-69c0-492f-94fd-69e1cb48ebb6.jpg",
      price:1.5
     },
     {id:39,
      nom:"Tomato Paste",
      category:"others",
      image:"https://www.listchallenges.com/f/items/512e987b-1d1e-43f9-bca8-0debdbad59fb.jpg",
      price:0.67
     },
     {id:40,
      nom:"Chips",
      category:"others",
      image:"https://www.listchallenges.com/f/items/cbde4310-bbe0-48c1-9236-dc7b906fb10d.jpg",
      price:1.5
     },
     {id:41,
      nom:"Teriyaki Sauce",
      category:"others",
      image:"https://www.listchallenges.com/f/items/acbcb20e-9438-46d7-bf7d-4bcbc5f4a44a.jpg",
      price:3
     },
     {id:42,
      nom:"Toast",
      category:"others",
      image:"https://www.listchallenges.com/f/items/dbe1dea5-6087-4b70-bb77-136d0435071b.jpg",
      price:1
     },
     {id:43,
      nom:"Chcolat",
      category:"others",
      image:"https://www.listchallenges.com/f/items/4030c884-3f86-401a-9789-275395c57c97.jpg",
      price:3
     },
     {id:44,
      nom:"Ice Cream",
      category:"others",
      image:"https://www.listchallenges.com/f/items/6c1483ac-98f6-45fa-a2bf-952a21f68a92.jpg",
      price:3
     },
     {id:45,
      nom:"Cake",
      category:"others",
      image:"https://www.listchallenges.com/f/items/c7087e9c-ba41-4d32-a52a-456199fca91a.jpg",
      price:4
     },
     {id:46,
      nom:"Cookie",
      category:"others",
      image:"https://www.listchallenges.com/f/items/b3c97953-723e-4c6f-93cf-4074766de9a1.jpg",
      price:3
     },
    
   ];
   /*
    méthodes accesseurs
    LECTURE / Ecriture
    CRUD
    Create - Read - Update - Delete
  */
  getProduits() {
    return this.produitsDb;
  }

  getProduit(id) {
    // return this.contactsDb.find( function(contact) { return contact.id == id}  );
    return this.produitsDb.find( produit => produit.id == id);
  }
 /* deleteProduit(produit) {
    let index = this.produitsDb.indexOf(produit);
    this.produitsDb.splice(index, 1);
  }*/
 getPaniers(){
   return this.paniersDb;
 }

  deleteProduit(produit) {
    let index = this.produitsDb.indexOf(produit);
    this.produitsDb.splice(index, 1);
  } 
  addProduitToPaniersDb(produit) {
    var valeur = 0
    let index = this.paniersDb.indexOf(produit);
    // SI le contact n'exite pas dans this.paniersDb -> on l'ajoute
    if (index === -1) {
      this.paniersDb.push(produit);
    }
    /*console.log(this.paniersDb);
    this.paniersDb.forEach(element => {
      valeur = element.price
    });*/
    
    return this.paniersDb;
   
  }
  removeProduitInPaniersDb(x21){
    console.log(x21);
    let index = this.paniersDb.indexOf(x21);
    
    this.paniersDb.splice(index, 1);
  }
 
  /*  else {
  
    }
    console.log(this.paniersDb);
  }*/

 
  
  }

  
  

 

