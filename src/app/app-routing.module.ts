import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ProduitComponent} from './produit/produit.component';
import {TotalComponent} from './total/total.component';




const routes: Routes = [
   {path: 'produit',component:ProduitComponent},
   {path: 'list',component:ListComponent}, 
   {path: 'total',component:TotalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
