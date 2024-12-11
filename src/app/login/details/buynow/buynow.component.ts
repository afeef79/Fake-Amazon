import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { Address } from '../../../address';
import { ProductService } from '../../../product.service';
import {FormGroup,FormControl,ReactiveFormsModule,FormsModule} from '@angular/forms';
@Component({
  selector: 'app-buynow',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './buynow.component.html',
  styleUrl: './buynow.component.scss'
})
export class BuynowComponent {

  form= new FormGroup({
    country: new FormControl(''),
    fullName: new FormControl(''),
    mobile: new FormControl(''),
    pincode: new FormControl(''),
    address: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    town: new FormControl(''),
    state: new FormControl(''),
    addressType: new FormControl(''),
    deliveryInstructions: new FormControl(''),
  })

  address: Address = {
    country: '',
    fullName: '',
    mobile: 0,
    pincode: 0,
    addressLine: '',
    area: '',
    landmark: '',
    town: '',
    state: '',
    addressType: '',
    deliveryInstructions: ''
  };

  

  constructor(private router: Router,private service : ProductService){}
  onSubmit(){
    const  buynowData=this.form.value
    this.service.buynowdata(buynowData)

    console.log(buynowData);
    
  }
 
}
