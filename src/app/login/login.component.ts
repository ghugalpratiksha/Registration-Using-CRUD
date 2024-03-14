import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router, private route:ActivatedRoute){}
  email:any;
  password:any;
  alert = false;
  data:any= [];

  login(){
    if (this.email === "sample@gmail.com" || this.password === "Password"){
      this.router.navigate(['registration']);
    }
    else if (this.email === "pratiksha1@gmail.com" || this.password === "123"){
      alert("Please enter valid data")
    }
    else{
      alert("Please enter data")
    }
    this.clear();
  }

  clear(){
    this.email = "";
    this.password = ""
  }

}
