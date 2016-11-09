import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the LoginForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(
      public viewCtrl: ViewController,
      @Inject(FormBuilder) fb: FormBuilder,
      public authService: AuthService
  ) {
    this.registerForm = fb.group({
      email: ["", Validators.required],
      username: ["", Validators.required],
      password1: ["", Validators.required],
      password2: ["", Validators.required]
    });
  }

  doLogin(event) {
    var formData = this.registerForm.value;
    console.log(formData);
    event.preventDefault();
    this.authService.login(formData);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
