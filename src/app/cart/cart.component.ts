import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  constructor(private cartService: CartService) {
    
    this.cartService.getProduct().subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
   })
  }

  ngOnInit(){
  }

  


}
