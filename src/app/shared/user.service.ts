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

  constructor(private http: HttpClient) { }

  user1: User ={
      document: 10404576,
      password: 'fasdasd',
      firstname: 'charlie',
      lastname: 'cruz',
      email: 'charl@unal.edu.co'
  }

//////////SAVE METHODS //////////////

  registerUser(user : User): Observable<User>{
    //let json = JSON.stringify(user1);
    //let params = "json="+json;
    const body: User = {
      document: user.document,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
      
    }
    return this.http.post<User>(this.userURL,user,httpOptions);
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
