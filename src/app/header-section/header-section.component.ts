import { CommonModule } from '@angular/common';  
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent implements AfterViewInit{
  @ViewChild('imageList') imageList!: ElementRef;
  @ViewChild('slideBtnLeft') slideBtnLeft!: ElementRef;
  @ViewChild('slideBtnRight') slideBtnRight!: ElementRef;
  @ViewChild('slidebar') slidebarNavigationEl!: ElementRef;
  @ViewChild('openSlider') sidebarOpenNavigationEl!: ElementRef;


  

//add more image this arry
  images = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU/travel/Hero-dex-3000x1200-._CB540530434_.jpg',
    'https://m.media-amazon.com/images/I/710qQ1b1q3L._SX3000_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/Nov/GW/ATF/27th/PC/3000x1200_PC_1._CB540527941_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/Nord4/16thNov24/3000x1200._CB541393352_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/PC_Laptops/November_MED/MED_Hero_PC_3000x1200._CB542093350_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/November/pc_27th_Nov._CB540527407_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Isha/RedmiA4/27th/D174826513_PC_Hero_3000x1200._CB540514119_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/BAU/PC/Hero/HO/PSE/PSE_PC_3000X1200_T1._CB567196011_.jpg',
  ];

  startSlider = 0;
  imgItemCount = 0;

  ngAfterViewInit(): void {
    const imgItems = this.imageList.nativeElement.querySelectorAll('.image-item');
    this.imgItemCount = imgItems.length;

    // Add event listeners for the buttons
    this.slideBtnLeft.nativeElement.addEventListener('click', () => this.slideLeft());
    this.slideBtnRight.nativeElement.addEventListener('click', () => this.slideRight());
  }

  slideLeft(): void {
    if (this.startSlider < 0) {
      this.startSlider += 100;
      this.updateSliderPosition();
    }
  }

  slideRight(): void {
    const maxSlider = -((this.imgItemCount - 1) * 100);
    if (this.startSlider > maxSlider) {
      this.startSlider -= 100;
      this.updateSliderPosition();
    }
  }

  updateSliderPosition(): void {
    this.imageList.nativeElement.style.transform = `translateX(${this.startSlider}%)`;

  }

  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
