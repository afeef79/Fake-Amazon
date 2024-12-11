 import { Component} from '@angular/core';
 import { HeaderSectionComponent } from '../header-section/header-section.component';
 import { CentersectionComponent } from "../center-section/center-section.component";
 import { FooterComponent } from '../footer/footer.component';
 import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderSectionComponent,CentersectionComponent,FooterComponent],
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

