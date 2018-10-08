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
  puestosaofrecer;
  sededestino;
  horasalida;

  hourpattern = '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';
  puestospattern = '^[1-9]$'
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

  elegirVehiculo(idPassedFromNgClick){
    localStorage.setItem("vehicleID",idPassedFromNgClick,);
    console.log(idPassedFromNgClick);
  }

  ofrecerpuestoBoton(){
    console.log(this.puestosaofrecer+this.sededestino+this.horasalida);
    this.vehicleService.registerTravel(this.puestosaofrecer,this.sededestino,this.horasalida);
  }
}
