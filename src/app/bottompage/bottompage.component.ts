import { Component, inject } from '@angular/core';
import { Router, RouterLink,RouterOutlet,RouterModule} from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bottompage',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet,RouterModule],
  templateUrl: './bottompage.component.html',
  styleUrl: './bottompage.component.scss'
})
export class BottompageComponent {
  product:any;
  topCategory:any;
  firstCategory:any;
  secondCategory:any;
  thirdCategory:any;
  FourthCategory:any;

  service:ProductService=inject(ProductService)

  constructor(private routes:Router){
    this.product=this.service.grtproduct()
    this.topCategory = this.product.top;
    this.firstCategory = this.product.first; 
    this.secondCategory = this.product.second;
    this.thirdCategory = this.product.third;
    this.FourthCategory = this.product.Fourth;

  }

  recommendedVideo = {
    image: 'little-krishna.jpg',
    title: 'Prime Video: Recommended for you',
    name: 'Little Krishna'
  };

  headphones = {
    title: 'Up to 75% off | Headphones',
    image: 'headphone.jpg'
  };

  furniture = {
    title: 'Up to 60% off | Furniture & mattresses',
    items: [
      { image: 'Mattresses.jpg', description: 'Mattresses & more' },
      { image: 'Officechairs.jpg', description: 'Office chairs & more' },
      { image: 'Sofas.jpg', description: 'Sofas & more' },
      { image: 'Bean_bags.jpg', description: 'Bean bags & more' }
    ]
  }
  items = [
    { image: 'id-1.jpg', name: 'Headphone 1' },
    { image: 'id-2.jpg', name: 'Headphone 2' },
    { image: 'id-3.jpg', name: 'Headphone 3' },
    { image: 'id-4.jpg', name: 'Headphone 4' },
    { image: 'id-5.jpg', name: 'Headphone 5' },
    { image: 'id-6.jpg', name: 'Headphone 6' },
    { image: 'id-7.jpg', name: 'Headphone 7' },
    { image: 'id-8.jpg', name: 'Headphone 8' },
    { image: 'id-9.jpg', name: 'Headphone 9' },
    { image: 'id-10.jpg', name: 'Headphone 10' },
    { image: 'id-11.jpg', name: 'Headphone 11' },
    { image: 'id-12.jpg', name: 'Headphone 12' },
    { image: 'id-13.jpg', name: 'Headphone 13' },  
    { image: 'id-14.jpeg', name: 'Headphone 14' },

  ];

  scrollPosition = 0; // Keeps track of current scroll position

  scrollLeft() {
    const container = document.querySelector('.carousel-items') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  scrollRight() {
    const container = document.querySelector('.carousel-items') as HTMLElement;
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
    this.routes.navigate(['/product']);
   
  }
}
