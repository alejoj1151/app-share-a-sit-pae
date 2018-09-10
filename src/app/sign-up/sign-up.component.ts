import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { unwrapValue } from '@angular/core/src/view';
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  
  pruebita = 'Esto es una prueba';

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@unal.edu.co$";
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      document: null,
      password: '',
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('Registro Exitoso');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

}
