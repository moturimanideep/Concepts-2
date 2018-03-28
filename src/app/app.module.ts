import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataLoadComponent } from './data-load/data-load.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'data-load', component: DataLoadComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataLoadComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
