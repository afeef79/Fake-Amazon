import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router} from '@angular/router';
import { ProductService } from '../../product.service';
// import { Prddetail } from '../prddetail';
import { CommonModule,JsonPipe, KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,JsonPipe,KeyValuePipe,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  product:any;
  recievedData:any;
  cartService: any;



  constructor(private router: Router,private Service: ProductService){
   // this.product = this.Service.sendata('id_123');
   // this.recievedData=history.state.id;
   // console.log('id',this.recievedData);
    this.product=this.Service.returnData(this.recievedData)



    console.log('hhhhhhhhhhhhhhhhh',this.product);
  }
  navigateToBuyNow() {
    this.router.navigate(['/buynow']) 

   // this.router.navigate(['/buynow']);    
  }

  thumbnails = [
    { src: 'Acscnd.jpg', alt: 'Thumbnail 1' },
    { src: 'acthird.jpg', alt: 'Thumbnail 2' },
    { src: 'acfourth.jpg', alt: 'Thumbnail 3' },
    { src: 'acfive.jpg', alt: 'Thumbnail 4' },
  ];
  sponsoredImage = 'lgadd.avif';

    
  iconimg = {
    features: [
      {
        icon: '1yearwrntyicon.png', 
        alt: 'Feature 1',
        text: '1 year warranty.'
      },
      {
        icon: 'returnpolityicon.png', 
        alt: 'Feature 2',
        text: 'Return Policy.'
      },
      {
        icon: 'topbrandicon.png', 
        alt: 'Feature 3',
        text: '10 Days Replacement by Brand.'
      }
    ]
  };

  onAddToCart() {
    const item = {
      id: 1,
      name: 'Sample Product',
      price: 100,
    }; // Replace with actual data
    this.cartService.addToCart(item);
  }
}
