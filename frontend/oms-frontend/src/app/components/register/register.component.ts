import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  register(){

    this.authService.register(this.user).subscribe((res:any)=>{

      alert(res.message);

      this.router.navigate(['/login']);

    });

  }

}