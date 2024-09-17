import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  //class to organize form reactive control
  registrationForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  // ngOnInit() {
  //   this.registrationForm = new FormGroup(
  //     {
  //       userName: new FormControl(null, Validators.required),
  //       email: new FormControl(null, [Validators.email, Validators.email]),
  //       password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //       confirmPassword: new FormControl(null, [Validators.required]),
  //       mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  //     }, this.passwordMatchingValidator);
  // }

  // //cross-field validation (input: Control, output: validator)
  // // used | for union type, can be Validators or null
  // passwordMatchingValidator(fg: FormGroup): Validators | null {
  //   return fg.get('password')!.value === fg.get('confirmPassword')!.value ? null :
  //   !{notmatched : true};

  // }

  ngOnInit() {
        this.createRegisterationForm();
    }

    // form builder is a hlper class for creating reactive forms
    createRegisterationForm() {
        this.registrationForm =  this.fb.group({
            userName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8)]],
            confirmPassword: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.maxLength(10)]]
        }, {validators: this.passwordMatchingValidator});

          // this.registrationForm.controls['userName'].setValue('Default Value');

    }

      // //cross-field validation (input: Control, output: validator)
  // // used | for union type, can be Validators or null
    passwordMatchingValidator(fg: FormGroup): Validators | null {
        return fg.get('password')!.value === fg.get('confirmPassword')!.value ? null :
            {notmatched: true};
    }


    get userName() {
      return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
}
get password() {
    return this.registrationForm.get('password') as FormControl;
}
get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
}
get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
}



  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value); // no longer needed since we created a model
      
      // this.userService.addUser(this.userData()); TODO, this should be uncommented
      // ERROR video 18 save data locally in browser
     
      this.registrationForm.reset()
      this.userSubmitted = false;
    }
  }


  userData(): User {
    return this.user = {
      // getters the get from registration form
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        mobile: this.mobile.value
    };
}

  // addUser(user: any) {
  //   let users = [];
  //   if (localStorage.getItem('Users')){
  //     users = JSON.parse(localStorage.getItem('Users')!);
  //     // users.push(user);
  //     // TODO error at 18.7:50
  //     users = [user, ...users]; // appends to front
  //   } else {
  //     users = [user];
      
  //   }
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }

}
