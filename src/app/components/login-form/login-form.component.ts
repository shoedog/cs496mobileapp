import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the LoginForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})

export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
      public viewCtrl: ViewController,
      @Inject(FormBuilder) fb: FormBuilder,
      public authService: AuthService,
      public tokenService: TokenService
  ) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  doLogin(event) {
    var formData = this.loginForm.value;
    console.log(formData);
    event.preventDefault();
    this.authService.login(formData)
      .then(res => {
        if( res.token ){
          this.tokenService.authToken = res;
          console.log(this.tokenService.authToken);
          this.dismiss();
        } else {
          alert(res.data);
        }
        
      })
      .catch( err => {
        alert(err);
      })
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
