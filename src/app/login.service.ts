import { Injectable } from '@angular/core';
import { User } from './shared/user.model';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';


// Este servicio es para buscar un usuario en la base de datos
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

}
