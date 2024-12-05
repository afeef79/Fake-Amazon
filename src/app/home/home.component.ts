import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
getdata:any
constructor( private service:ProductService){
this.getdata=this.service.productdetails['id_123'];
console.log(this.getdata);
}
}
