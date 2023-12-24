import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SimpleButtonComponent } from 'src/app/core/components/simple-button/simple-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCreateAccountComponent } from './components/form-create-account/form-create-account.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';

@NgModule({
  declarations: [LoginPageComponent, FormLoginComponent, FormCreateAccountComponent, CreateAccountPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SimpleButtonComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
