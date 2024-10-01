import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';
import { UserForLogin } from '../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private alertify: AlertifyService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm){
      console.log(loginForm);
      this.authService.authUser(loginForm.value).subscribe(
        (response: any /*UserForLogin*/) => {
            console.log(response);
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('userName', user.userName);
                this.alertify.success('Login Successful');
                this.router.navigate(['/']);
            }
        },
        (error) => {
            console.log(error);
            // this.alertify.error(error.error);
        }
    );

      // if(token){
      //   localStorage.setItem('token', token.userName ) // current user
      //   this.alertify.success('login successful')
      //   this.router.navigate(['/']); // rediredct
      // }
      // else{
      //   this.alertify.error('login not successful')
      // }
  }

}
