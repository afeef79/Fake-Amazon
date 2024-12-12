import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailsComponent } from '../login/details/details.component';
import { HeaderSectionComponent } from "../header-section/header-section.component";
import { HomepagesComponent } from "../homepages/homepages.component";
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,DetailsComponent,HeaderSectionComponent,HomepagesComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  getdata:any
constructor( private service:ProductService, private router :Router){
this.getdata=this.service.productdetailsss('id_123');
console.log(this.getdata);
}

navigateToDetails(productId: string): void {
  this.router.navigate(['/details', productId]);
}
 
}

