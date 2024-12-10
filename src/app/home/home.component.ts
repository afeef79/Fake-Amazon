import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailsComponent } from '../login/details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  getdata:any
constructor( private service:ProductService, private router :Router){
this.getdata=this.service.productdetails['id_123'];
console.log(this.getdata);
}

navigateToDetails(productId: string): void {
  this.router.navigate(['/details', productId]);
}

}
