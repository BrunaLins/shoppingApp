import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProduitComponent } from './produit/produit.component';
import { TotalComponent } from './total/total.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProduitComponent,
    TotalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
