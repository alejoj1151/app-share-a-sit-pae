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
  vehicleURL= 'http://localhost:8080/users/add-vehicles/'+ localStorage.getItem("tokenID");  //URL para registrar vehiculo asociado a un ID
  listvehicleURL= 'http://localhost:8080/users/vehicles?id=' + localStorage.getItem("tokenID"); // obtener la lista de vehiculos asociados a un ID
  deletevehicleURL = 'http://localhost:8080/users/delete-vehicles?id=' + localStorage.getItem("tokenID") + '&numberplate=';
  insertravelURL = 'http://localhost:8080/travels/insert?vehicleid=' + localStorage.getItem("vehicleID") +   '&driverid=' + localStorage.getItem("tokenID");


  constructor(private http: HttpClient) { }

///////////// SERVICIO PARA REGISTRAR UN VEHÍCULO /////////////////  
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
///////////////////////////////////////////////////////////////////

//////////// SERVICIO PARA OBTENER LISTA DE VEHÍCULOS /////////////

  gelistvehicles(listvehicles: JSON){
    //console.log('se llama al servicio de lista de vehiculos');
    return this.http.get(this.listvehicleURL);
  }
//////////////////////////////////////////////////////////////////

////////////// SERVICIO PARA BORRAR UN VEHICULO //////////////////

  deleteVehicle(placa){
    return this.http.delete(this.deletevehicleURL+placa, {
      responseType: 'text',
    });
    
  }

//////////////////////////////////////////////////////////////////


/////////////// SERVICIO PARA INSERTAR UN VIAJE ///////////////

  registerTravel(disponibles, origen, hora){
    const travelBody = {
      "available_seats": disponibles,
      "origen": origen,
      "hour": hora
    }
    console.log(this.insertravelURL);
    console.log(travelBody);
    return this.http.put(this.insertravelURL,travelBody,httpOptions);
  }



//////////////////////////////////////////////////////////////////
}
