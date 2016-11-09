import { Component, OnInit } from '@angular/core';

import { LoginFormComponent } from '../login-form/login-form.component';
import { ModalController } from 'ionic-angular';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { TokenService } from '../../services/token.service';

@Component({
    selector: "login-register",
    templateUrl: 'template.html'
})
export class LoginRegisterComponent {
    needAuth: boolean = true;

    constructor(
        public modalCtrl: ModalController,
        public tokenService: TokenService
        ) { }
    
    

    ngOnInit() { this.checkToken(); }

    openLogin() {
        let modal = this.modalCtrl.create(LoginFormComponent);
        modal.present();
        modal.onWillDismiss(() => {
            this.checkToken();
        }); 
    }

    openRegister() {
        let modal = this.modalCtrl.create(RegisterFormComponent);
        modal.present();
        modal.onWillDismiss(() => {
            this.checkToken();
        }); 
    }

    checkToken() {
        if (this.tokenService.authToken === undefined ) {
            this.needAuth = true;
        } else {
            this.needAuth = false;
        }

    }
}

