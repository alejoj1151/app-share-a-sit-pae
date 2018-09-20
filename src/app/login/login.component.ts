import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  prueba = ' esto es una prueba';

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(email,password){
    this.userService.userAuthentication(email,password).subscribe((userjson : any)=>{
    //console.log('email'+ email,' contraseña: '+ password);  // PARA MOSTRAR POR CONSOLA (F12) LOS VALORES INSERTADOS EN EL FORMULARIO
    console.log(userjson);
    
    //console.log(JSON.stringify(userjson,['email']));
    //console.log('{"email":' +'"'+ email + '"' + '}');
    
    var jsonemail = JSON.stringify(userjson,['email']);

    //console.log(jsonemail);
    //console.log('{"password":' +'"'+ password + '"' + '}');

    if ( (jsonemail === '{"email":' +'"'+ email + '"' + '}')) {
      this.router.navigate(['/home']);
    } else {
      
    }
    

   },
   (err : HttpErrorResponse)=>{
    this.isLoginError = true;
   });
  }


  
}
