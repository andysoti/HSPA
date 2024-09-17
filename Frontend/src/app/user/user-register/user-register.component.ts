import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  //class to organize form reactive control
  registrationForm!: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder) { }

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
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);
  }

  addUser(user: any) {
    let users : any[] = [];
    if (localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')!);
      users.push(user);
      // users = [user, ...users]; // appends to front
    } else {
      users = [user];
      
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
