import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../shared/vehicle.service';

@Component({
  selector: 'app-asksit',
  templateUrl: './asksit.component.html',
  styleUrls: ['./asksit.component.css']
})
export class AsksitComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private toastr: ToastrService) { }

  hourpattern = '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';
  horasalida;
  horainicio;
  origen;

  filtrados = []; //viajes filtrados

  ngOnInit() {
  }

  filterTravelsBoton(){
    console.log(this.horainicio,this.horasalida,this.origen);
    this.vehicleService.filterTravel(this.horainicio,this.horasalida,this.origen).subscribe((travlistjson:any) =>{
      for (var i=0; i < travlistjson.length; i++){
        this.filtrados.push(travlistjson[i]);
      }

    });
    console.log(this.filtrados);
    
  }
}
