import { IonicApp, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { AppRoot } from './app.component';
import { AuthService } from './services/auth.service'
import { Constants } from './constants';
import { ContactPage } from '../pages/contact/contact';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component'
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
      AppRoot,
      AboutPage,
      ContactPage,
      HomePage,
      TabsPage,
      LoginFormComponent,
      RegisterFormComponent,
      LoginRegisterComponent
  ],
  imports: [
      IonicModule.forRoot(AppRoot),
      FormsModule,
      HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      AppRoot,
      AboutPage,
      ContactPage,
      HomePage,
      TabsPage,
      LoginFormComponent,
      RegisterFormComponent,
  ],
  providers: [Constants, AuthService, TokenService]
})
export class AppModule {}
