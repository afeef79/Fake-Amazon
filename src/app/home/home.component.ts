 import { Component} from '@angular/core';
 import { FooterComponent } from '../footer/footer.component';
 import { HeaderSectionComponent } from '../header-section/header-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,HeaderSectionComponent ],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss'] 
})


export class HomeComponent {
 
}


