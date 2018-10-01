import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';
import { ToastrService } from 'ngx-toastr'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  prueba = ' esto es una prueba';

  constructor(private userService : UserService,private router : Router,  private toastr: ToastrService) { }

  ngOnInit() {
  }

  OnSubmit(email,password){
    this.userService.userAuthentication(email,password).subscribe((userjson : any)=>{
    //console.log('email'+ email,' contraseña: '+ password);  // PARA MOSTRAR POR CONSOLA (F12) LOS VALORES INSERTADOS EN EL FORMULARIO
    console.log(userjson);
    
    //console.log(JSON.stringify(userjson,['email']));
    //console.log('{"email":' +'"'+ email + '"' + '}');
    
    var jsonemail = JSON.stringify(userjson,['email']);
    //JSON.stringify(userjson,['id']
    localStorage.setItem("tokenID",userjson.id); //guardo el ID del usuario en una variable local

    //console.log(jsonemail);
    //console.log('{"password":' +'"'+ password + '"' + '}');

    if ( (jsonemail === '{"email":' +'"'+ email + '"' + '}')) {
      this.router.navigate(['/home']);
    } else {
      this.toastr.error('Usuario o contraseña inválidos');
    }
    

   },
   (err : HttpErrorResponse)=>{
    this.isLoginError = true;
   });
  }


  
}
