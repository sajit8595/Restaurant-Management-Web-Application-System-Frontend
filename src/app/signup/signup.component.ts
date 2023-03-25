import  access, { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {

  user = { email: '', password: '' };


  constructor(private authService: AuthService, private router: Router) { }

  value: any;
  onSubmit() {

    if(this.user.email === '' || this.user.password == '')
    {
      alert('Please Enter the Login Information')
      return
    }

    this.authService.auth(this.user.email, this.user.password).subscribe(
      result => {
        this.value = result;
        if (this.value == 1) {
          access.login = 'admin';
          this.router.navigate(['/admin']);
        }
        else if (this.value == 2) {
          access.login = 'waiter';
          this.router.navigate(['/waiter']);
        }
        else if (this.value == 3) {
          access.login = 'chef';
          this.router.navigate(['/chef']);
        }
        else
          alert("Please Enter correct Credentials!!")
    
      }
    );

    

  }


}
