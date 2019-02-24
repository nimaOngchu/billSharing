import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  fieldRequired = 'This field is required';
  // tslint:disable-next-line:max-line-length
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
  constructor() { }

  // form grounp for signIn/login
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(this.emailregex)]),
    password:  new FormControl(null, [Validators.required, Validators.pattern(this.passwordRegx)])
  });

// form grounp for signUp\register
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(this.emailregex)]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(this.passwordRegx)])
  });

  // emaill errors check
  emaiErrors(form: FormGroup) {

    return form.get('email').hasError('required') ? this.fieldRequired :
    form.get('email').hasError('pattern') ? 'Not a valid emailaddress' : '';
  }

  // getting what error are thrown from html
  getErrorPassword(form: FormGroup) {
    return form.get('password')
      .hasError('required') ? this.fieldRequired :

      form.get('password')
        .hasError('pattern') ?
        'Password must be at least 6 characters, 1 uppercase letter and 1 number' : '';
  }
  // check  validation
  checkValidation(input: string, form: FormGroup) {
    const validation = form.get(input).invalid && (form.get(input).dirty || form.get(input).touched);
    return validation;
  }

}
