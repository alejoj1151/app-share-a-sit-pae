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
import { OfferedComponent } from './offered/offered.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
  { path: 'register', component: SignUpComponent, canActivate: [NoLoginGuard] },
  { path: 'home' , component: HomeComponent , canActivate: [LoginGuard]},
  { path: 'asksit', component: AsksitComponent , canActivate: [LoginGuard]},
  { path: 'offersit', component: OffersitComponent , canActivate: [LoginGuard]},
  { path: 'registervehicle', component: SignUpVehicleComponent , canActivate: [LoginGuard]},
  { path: 'sittaken' , component: SittakenComponent , canActivate: [LoginGuard]},
  { path: 'offered', component: OfferedComponent , canActivate: [LoginGuard]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
