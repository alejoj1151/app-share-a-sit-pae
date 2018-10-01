import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VehicleService } from '../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-sign-up-vehicle',
  templateUrl: './sign-up-vehicle.component.html',
  styleUrls: ['./sign-up-vehicle.component.css']
})
export class SignUpVehicleComponent implements OnInit {

  vehicle : Vehicle;
  constructor(private vehicleService: VehicleService, private toastr: ToastrService,private router : Router) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.vehicle = {
        numberplate: '',
        type: '',
        totalseats: null
      }
  }

  OnSubmit(form: NgForm) {
    this.vehicleService.registerVehicle(form.value)
      .subscribe((data: any) => {
        console.log(form.value);
        if (data.key!== '') {
          this.resetForm(form);
          this.toastr.success('Registro Exitoso de vehículo');
          return true;
        }
        else
          this.toastr.error('Falló el registro de vehpiculo');
      });
  }
}
