 import { Component} from '@angular/core';
 import { HeaderSectionComponent } from '../header-section/header-section.component';
 import { CentersectionComponent } from "../center-section/center-section.component";
 import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderSectionComponent,CentersectionComponent,FooterComponent ],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss'] 
})


export class HomeComponent {
 
}
