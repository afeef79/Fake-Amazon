import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homepages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepages.component.html',
  styleUrl: './homepages.component.scss'
})
export class HomepagesComponent {
  thumbnails: string[] = [
    'pixel1.jpg',
    'pixel2.jpg',
    'pixel3.jpg',
    'pixel4.jpg',
  ];

  // Currently selected image to display as the main image
  selectedImage: string = this.thumbnails[0];

  // Method to update the main image
  onThumbnailClick(image: string) {
    this.selectedImage = image;
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
    { image: 'headphone1.jpg', name: 'Headphone 1' },
    { image: 'headphone2.jpg', name: 'Headphone 2' },
    { image: 'headphone3.jpg', name: 'Headphone 3' },
    { image: 'headphone4.jpg', name: 'Headphone 4' },
    { image: 'headphone5.jpg', name: 'Headphone 5' },
    { image: 'headphone6.jpg', name: 'Headphone 6' },
    { image: 'headphone7.jpg', name: 'Headphone 7' },
    { image: 'headphone8.jpg', name: 'Headphone 8' },
    { image: 'headphone9.jpg', name: 'Headphone 9' },
    { image: 'headphone10.jpg', name: 'Headphone 10' },
    { image: 'headphone11.jpg', name: 'Headphone 11' },
    { image: 'headphone12.jpg', name: 'Headphone 12' },
    { image: 'headphone13.jpg', name: 'Headphone 13' },
  ];

  items2 = [
    { image: 'gimbal1.jpg', name: 'gimbal 1' },
    { image: 'gimbal2.jpg', name: 'gimbal 2' },
    { image: 'mouse1.jpg', name: 'mouse' },
    { image: 'gimbal3.jpg', name: 'gimbal 3' },
    { image: 'headphone5.jpg', name: 'Headphone 5' },
    { image: 'gimbal4.jpg', name: 'gimbal 4' },
    { image: 'mouse1.jpg', name: 'mouse2' },
    { image: 'keyboard.jpg', name: 'keyboard' },
    { image: 'headphone9.jpg', name: 'Headphone 9' },
    { image: 'headphone10.jpg', name: 'Headphone 10' },
    { image: 'monitor.jpg', name: 'monitor' },
    { image: 'headphone12.jpg', name: 'Headphone 12' },
    { image: 'cpu.jpg', name: 'cpu' },
  ];


  scrollPosition = 0; // Keeps track of current scroll position

  scrollLeft() {
    const container = document.querySelector('.carousel-items1') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollRight() {
    const container = document.querySelector('.carousel-items1') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollLeft2() {
    const container = document.querySelector('.carousel-items2') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollRight2() {
    const container = document.querySelector('.carousel-items2') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }
  
  products = [
    {
      title: 'Pick up where you left off',
      image: 'pixel8a.jpg',
      description: 'Pixel 8a 5G (Obsidian, 8 GB RAM 128 GB Storage) Mobile',
      price: 41499,
      mrp: 69999,
    }
  ];
  carouselItems = Array.from({ length: 10 }, (_, i) => ({
  }));

  videowatch() {
    console.log('Video is being watched!');
}
}