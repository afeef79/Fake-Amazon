import { Component,inject } from '@angular/core';
import { Router, RouterLink,RouterOutlet,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  product:any;
  topCategory:any;
  firstCategory:any;
  secondCategory:any;
  thirdCategory:any;
  FourthCategory:any;
  FifthCategory:any;
  sixthCategory:any;
  sevnthCategory:any;
  eithCategory:any;

  service:ProductService=inject(ProductService)
  constructor(private routes:Router){
    this.product=this.service.grtproduct()
    this.topCategory = this.product.top;
    this.firstCategory = this.product.first; 
    this.secondCategory = this.product.second;
    this.thirdCategory = this.product.third;
    this.FourthCategory = this.product.Fourth;
    this.FifthCategory = this.product.fifth;
    this.sixthCategory = this.product.sixth;
    this.sevnthCategory = this.product.sevnth;
    this.eithCategory = this.product.eith;


  }

  items3 = [
    { image: 'id-1.jpg', name: 'Headphone 1' },
    { image: 'id-2.jpg', name: 'Headphone 2' },
    { image: 'id-3.jpg', name: 'Headphone 3' },
    { image: 'id-4.jpg', name: 'Headphone 4' },
    { image: 'id-5.jpg', name: 'Headphone 5' },
    { image: 'id-6.jpg', name: 'Headphone 6' },
    // { image: 'id-7.jpg', name: 'Headphone 7' },
    { image: 'id-8.jpg', name: 'Headphone 8' },
    { image: 'id-9.jpg', name: 'Headphone 9' },
    { image: 'id-10.jpg', name: 'Headphone 10' },
    { image: 'id-11.jpg', name: 'Headphone 11' },
    { image: 'id-12.jpg', name: 'Headphone 12' },
    { image: 'id-13.jpg', name: 'Headphone 13' },  
    { image: 'id-14.jpeg', name: 'Headphone 14' },

  ];

  scrollPosition = 0; // Keeps track of current scroll position

  scrollLeft3() {
    const container = document.querySelector('.carousel-items3') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  scrollRight3() {
    const container = document.querySelector('.carousel-items3') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  carouselItems = Array.from({ length: 10 }, (_, i) => ({
  }));

  videowatch() {
    console.log('Video is being watched!');
  }
  navigateToDetails() {
    this.routes.navigate(['details/:id']);
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    
  }
}


