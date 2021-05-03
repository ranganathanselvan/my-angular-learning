import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SsnComponent } from './ssn/ssn.component';
import { ButtonComponent } from './material/button/button.component';
import { WelcomeComponent } from './fitness/welcome/welcome.component';

const routes: Routes = [
  { path: 'ssn', component: SsnComponent },
  { path: 'material/button', component: ButtonComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fitness/welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
