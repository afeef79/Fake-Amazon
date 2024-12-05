import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private signupdata: any[] = [];
  constructor() {
    // Get saved data from localStorage if available
    const saveddata = localStorage.getItem('signupdata');
    if (saveddata) {
      try {
        const parsedData = JSON.parse(saveddata);
        this.signupdata = Array.isArray(parsedData) ? parsedData : [];
      } catch (error) {
        console.error('Error parsing signup data from localStorage', error);
      }
    }
  }

  savesignupdata(data: any):void{
    // console.log('Before push, signupdata:', this.signupdata);
    if (Array.isArray(this.signupdata)) {
      this.signupdata.push(data);
      localStorage.setItem('signupdata', JSON.stringify(this.signupdata));
      console.log('Signup data saved', this.signupdata);
    } else {
      console.error('signupdata is not an array');
    }
  }
  verifylogindata(data :any):boolean{
     console.log('Verifying login data:',data);
     console.log('verifying signupdata',this.signupdata);
     
     const result = this.signupdata.some(
    (user) =>user.mobilenumber === data.mobilenumber && user.password === data.password
  );
    
    
    console.log('Verification result:', result);
    return result;
  }
  // cleardata(): void {
  //   // Clear only in-memory data, not localStorage
  //   console.log('Cleared in-memory signup data');
  //   this.signupdata = [];
  // }
}
