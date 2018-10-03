import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../shared/vehicle.service';



@Component({
  selector: 'app-offersit',
  templateUrl: './offersit.component.html',
  styleUrls: ['./offersit.component.css']
})
export class OffersitComponent implements OnInit {

  carro: Vehicle;

  carros: Vehicle[];
  listavehiculos: any;
  vehiculos = []; //lista donde se guardan los vehiculos obtenidos por el servicio getListVehicles
  

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    //this.vehiculos=[];
    this.ofrecerpuesto();
  }

  ofrecerpuesto(){
    //var jsonlistveh = localStorage.getItem("listavehiculos");
    
    this.vehicleService.gelistvehicles(this.listavehiculos).subscribe((listvehiclesjson : any) =>{
      console.log(listvehiclesjson);
      for (var i=0; i< listvehiclesjson.length; i++) {
        var obj = listvehiclesjson[i];
        this.vehiculos.push(listvehiclesjson[i]); //guarda los vehiculos en la lista para luego recorrerlos en la vista
        
      }

    });
    //console.log(localStorage.getItem("listavehiculos"));
    //localStorage.setItem("vehiculos",JSON.stringify(this.listavehiculos));
  }


  borrarVehiculoClick(){
    this.vehicleService.deleteVehicle('TRB077');

  }

}
