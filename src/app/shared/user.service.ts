import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../shared/user.model';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL= 'http://localhost/8080';

  constructor(private http: HttpClient) { }

  
  registerUser(user : User){
    const body: User = {
      Cedula: user.Cedula,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.userURL + '/api/User/Register', body);
  }


}
