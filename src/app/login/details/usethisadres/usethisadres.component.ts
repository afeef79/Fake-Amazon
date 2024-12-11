import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usethisadres',
  standalone: true,
  imports: [],
  templateUrl: './usethisadres.component.html',
  styleUrl: './usethisadres.component.scss'
})
export class UsethisadresComponent {

  constructor(private router : Router){

  }

  useThisAddress() {
    this.router.navigate(['/usethisadres']); // Navigate programmatically
  }
}
