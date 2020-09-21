import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ProduitComponent} from './produit/produit.component';





const routes: Routes = [
   {path: 'produit',component:ProduitComponent},
   {path: 'list',component:ListComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
