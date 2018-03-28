import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  userdata: any;
  response: any;
  constructor(private fb: FormBuilder,private router: Router, private http: Http, private cartService: CartService) {  }
  ngOnInit() {
      this.user = this.fb.group({
        email: [null, Validators.required],
          password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
      });
  }
  onSubmit(user) {
    this.userdata = user.value;
    // this.router.navigate(['/empdetails']);
    // this.serverservice.setUserLoggedIn();
   this.cartService.userLog(this.userdata).subscribe( 
     (res) => { this.response = res;
        console.log(this.response);
        this.router.navigate(['/cart'])
    },                              
     (err) => { console.log(err); }
    
    );
    }
}

