import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../shared/user.model';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import {Observable} from 'rxjs';
import { Vehicle } from '../models/vehicle.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleURL= 'http://localhost:8080/users/add-vehicles/'+ localStorage.getItem("tokenID");
  constructor(private http: HttpClient) { }

  registerVehicle(vehicle : Vehicle): Observable<Vehicle>{
    //const car = new Vehicle(vehicle.numberplate,vehicle.type,vehicle.$totalseats);
    //const body = JSON.stringify(car);

    const bodyj = {	"vehicles":[
      {
        "numberplate": vehicle.numberplate,
        "type": vehicle.type,
        "totalseats": vehicle.totalseats
      }
    ]
  }
    return this.http.put<Vehicle>(this.vehicleURL,bodyj,httpOptions);
  }




}
