import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //cliente de http
import { UserService } from './shared/user.service';
import { LoginService } from './login.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AsksitComponent } from './asksit/asksit.component';
import { OffersitComponent } from './offersit/offersit.component';
import { SignUpVehicleComponent } from './sign-up-vehicle/sign-up-vehicle.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SittakenComponent } from './sittaken/sittaken.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    AsksitComponent,
    OffersitComponent,
    SignUpVehicleComponent,
    SittakenComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  //exports: [SignUpComponent],
  providers: [UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
