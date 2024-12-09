 import { Component} from '@angular/core';
 import { HeaderSectionComponent } from "../header-section/header-section.component";
 import { HomepagesComponent } from "../homepages/homepages.component";
 import {BottompageComponent } from "../bottompage/bottompage.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderSectionComponent,HomepagesComponent,BottompageComponent],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss'] 
})


export class HomeComponent {
 
}


