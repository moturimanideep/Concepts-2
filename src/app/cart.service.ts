import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CartService {
  product: any;
  private subject = new Subject();
  constructor() { }

  SendProduct(data){
    
     this.product = data;
    console.log("Cart Service");
    console.log(data);
    this.subject.next(this.product);
  }

  getProduct(): Observable<any>{
    console.log(this.product);
    return this.subject.asObservable();
  }

}
