import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { DetailsComponent } from './login/details/details.component';
import { BuynowComponent } from './login/details/buynow/buynow.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'customerservice',component:CustomerserviceComponent},
   
    { path: '', component: HomeComponent},
    { path: 'details/:id', component: DetailsComponent },
    {path:'',redirectTo:'/details/:id', pathMatch:'full'},
    { path: 'buynow', component: BuynowComponent },

];
