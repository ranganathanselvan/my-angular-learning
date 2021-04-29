import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SsnComponent } from './ssn/ssn.component';
import { ButtonComponent } from './material/button/button.component';

const routes: Routes = [
  { path: 'ssn', component: SsnComponent },
  { path: 'material/button', component: ButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
