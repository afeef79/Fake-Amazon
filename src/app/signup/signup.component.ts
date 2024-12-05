import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { FormsModule ,FormGroup, FormControl, ReactiveFormsModule,Validators} from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  selectedCountryCode = '+91';
  countryCodes = [
    { name: 'AF', code: '+93' },  // Afghanistan
    { name: 'AL', code: '+355' }, // Albania
    { name: 'DZ', code: '+213' }, // Algeria
    { name: 'AD', code: '+376' }, // Andorra
    { name: 'AO', code: '+244' }, // Angola
    { name: 'AR', code: '+54' },  // Argentina
    { name: 'AM', code: '+374' }, // Armenia
    { name: 'AU', code: '+61' },  // Australia
    { name: 'AT', code: '+43' },  // Austria
    { name: 'BD', code: '+880' }, // Bangladesh
    { name: 'BE', code: '+32' },  // Belgium
    { name: 'BR', code: '+55' },  // Brazil
    { name: 'CA', code: '+1' },   // Canada
    { name: 'CN', code: '+86' },  // China
    { name: 'DK', code: '+45' },  // Denmark
    { name: 'EG', code: '+20' },  // Egypt
    { name: 'FR', code: '+33' },  // France
    { name: 'DE', code: '+49' },  // Germany
    { name: 'IN', code: '+91' },  // India
    { name: 'ID', code: '+62' },  // Indonesia
    { name: 'IT', code: '+39' },  // Italy
    { name: 'JP', code: '+81' },  // Japan
    { name: 'KE', code: '+254' }, // Kenya
    { name: 'MY', code: '+60' },  // Malaysia
    { name: 'MX', code: '+52' },  // Mexico
    { name: 'NL', code: '+31' },  // Netherlands
    { name: 'NZ', code: '+64' },  // New Zealand
    { name: 'NG', code: '+234' }, // Nigeria
    { name: 'PK', code: '+92' },  // Pakistan
    { name: 'PH', code: '+63' },  // Philippines
    { name: 'RU', code: '+7' },   // Russia
    { name: 'ZA', code: '+27' },  // South Africa
    { name: 'ES', code: '+34' },  // Spain
    { name: 'LK', code: '+94' },  // Sri Lanka
    { name: 'SE', code: '+46' },  // Sweden
    { name: 'CH', code: '+41' },  // Switzerland
    { name: 'TH', code: '+66' },  // Thailand
    { name: 'TR', code: '+90' },  // Turkey
    { name: 'AE', code: '+971' }, // United Arab Emirates
    { name: 'UK', code: '+44' },  // United Kingdom
    { name: 'US', code: '+1' },   // United States
    { name: 'VN', code: '+84' },  // Vietnam
    
  ];
 
  signup = new FormGroup({
    Name:new FormControl('', [Validators.required]),
    mobilenumber: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    countryCode: new FormControl('+91'),
  });

  constructor(private router:Router,private service:UserService){}

  Submit(){
    if(this.signup.valid){
    const signupdata=this.signup.value 
    this.service.savesignupdata(signupdata)
    console.log(signupdata);
    this.router.navigate(['/home']) 
  }else{
    console.log('form is invalid');
    
  } 
  };
}
