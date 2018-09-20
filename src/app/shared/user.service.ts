import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../shared/user.model';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL= 'http://localhost:8080/users';

  loginURL= 'http://localhost:8080/users/login?';

  constructor(private http: HttpClient) { }

 

//////////SAVE METHODS //////////////

  registerUser(user : User): Observable<User>{
    //let json = JSON.stringify(user1);
    //let params = "json="+json;
    const body: User = {
      document: user.document,
      password: user.password,
      firstname: user.firstname,
      lastname:  user.lastname,
      email: user.email,
    }
    return this.http.post<User>(this.userURL,body,httpOptions);
  }

  //Va al backend, luego este se encarga de bus
  userAuthentication(email, password) {
    var data = "email=" + email + "&password=" + password;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8'});
    return this.http.get(this.loginURL + data);
  }


  //json = JSON.stringify(this.user1);



}


/*const body: User = {
      Cedula: 10404576,
      Password: 'fasdasd',
      FirstName: 'charlie',
      LastName: 'cruz',
      Email: 'charl@unal.edu.co'
    }*/

      /*registerUser(json : JSON): Observable<any>{
    //let json = JSON.stringify(user1);
    //let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');

    
    return this.http.post(this.userURL, json, {headers: headers});
  }*/
