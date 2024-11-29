import { Component } from '@angular/core';
import { RouterLink,RouterOutlet,Router } from '@angular/router';
import { FormsModule ,FormGroup, FormControl, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new FormGroup({
    mobilenumber: new FormControl(''),
    password: new FormControl(''),
  });

 constructor(private router:Router,private service:UserService,private fb: FormBuilder){}

 signup(){
  this.router.navigate(['signup']) 
 }

  

onSubmit(){
  //const logindata=this.login.value
  // this.service.logindata(logindata)
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

  this.router.navigate(['/home'])
}
}
