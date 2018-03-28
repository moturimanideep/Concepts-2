import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CartService {
  product: any;
  userData: any;
  private subject = new Subject();
  constructor(private http: Http) { }

  SendProduct(data){
    this.product = data;
    this.subject.next(this.product);
  }

  // getProduct(): Observable<any>{
  //   return this.subject.asObservable();
  // }

  getProduct(): any {
    return this.product;
  }

  userLog(data: any) {
    this.userData = data;
    console.log(this.userData);
    return this.http.post('http://servicecity1.herokuapp.com/log', this.userData).map(
        function(res: Response)  { 
          console.log(res); 
          return res.json(); });
}

}