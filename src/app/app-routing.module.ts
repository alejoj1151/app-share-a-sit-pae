import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from  './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { HomeComponent } from './home/home.component';
import { AsksitComponent } from './asksit/asksit.component';
import { OffersitComponent } from './offersit/offersit.component';
import { SignUpVehicleComponent } from './sign-up-vehicle/sign-up-vehicle.component';
import { SittakenComponent } from './sittaken/sittaken.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'asksit', component: AsksitComponent},
  { path: 'offersit', component: OffersitComponent},
  { path: 'registervehicle', component: SignUpVehicleComponent},
  { path: 'sittaken' , component: SittakenComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
