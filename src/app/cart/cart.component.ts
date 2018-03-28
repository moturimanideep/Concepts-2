import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = [];
  constructor(private cartService: CartService) {
      this.products = this.cartService.getProduct();
    
  }
ngOnInit(){
//   this.cartService.getProduct().subscribe((data: any) => {
//     this.products = data;
    
//     console.log(this.products);
//  })
}  


}
