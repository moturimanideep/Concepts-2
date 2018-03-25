import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataLoadComponent } from './data-load/data-load.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'data-load', component: DataLoadComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataLoadComponent,
    ProductsComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
