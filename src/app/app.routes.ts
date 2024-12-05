import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'customerservice',component:CustomerserviceComponent},
    {path:'privacypolicy',component:PrivacypolicyComponent},



];
