import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'create-account', component: CreateAccountPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
