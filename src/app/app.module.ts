import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SsnComponent } from './ssn/ssn.component';
import { ButtonComponent } from './material/button/button.component';
import { TextboxComponent } from './material/textbox/textbox.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './fitness/welcome/welcome.component';
import { EmployeeDashboardComponent } from './employee/components/dashboard/dashboard.component';
import { PeopleComponent } from './employee/components/people/people.component';
import { PeopleListComponent } from './employee/components/people/people-list/people-list.component';
import { PeopleDetailsComponent } from './employee/components/people/people-details/people-details.component';
import { PeopleAddComponent } from './employee/components/people/people-add/people-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SsnComponent,
    ButtonComponent,
    TextboxComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    EmployeeDashboardComponent,
    PeopleComponent,
    PeopleListComponent,
    PeopleDetailsComponent,
    PeopleAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
