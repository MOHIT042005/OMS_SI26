import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{

  user={

    email:'',
    password:''

  };

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  login(){

    this.authService.login(this.user).subscribe((res:any)=>{

      if(res.message=="Login Successful"){

        this.router.navigate(['/dashboard']);

      }else{

        alert(res.message);

      }

    });

  }

}