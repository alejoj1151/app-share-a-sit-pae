import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asksit',
  templateUrl: './asksit.component.html',
  styleUrls: ['./asksit.component.css']
})
export class AsksitComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private toastr: ToastrService,private router : Router) { }

  hourpattern = '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';
  horasalida;
  horainicio;
  origen;
  form: NgForm;
  filtrados = []; //viajes filtrados

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
  }
  OnSubmit(form: NgForm){
    this.filterTravelsBoton();
  }

  filterTravelsBoton(){
    //table.reset();
    this.filtrados=[];
    console.log(this.horainicio,this.horasalida,this.origen);
    this.vehicleService.filterTravel(this.horainicio,this.horasalida,this.origen).subscribe((travlistjson:any) =>{
      if (travlistjson != null) {
        this.toastr.success('Filtrado exitoso');
      }
      else{
        this.toastr.error('No hay viajes en el rango u origen definidos');
      return false;}
      
      for (var i=0; i < travlistjson.length; i++){
        this.filtrados.push(travlistjson[i]);
        
      }


      this.horainicio=null;
      this.horasalida=null;
      this.origen=null;
    
    });
    console.log(this.filtrados);
    
  }
  reservarPuesto(idVehiculo){
    
    this.vehicleService.takesitService(idVehiculo).subscribe((respuesta:any) =>{
      if (respuesta == true) {
        this.router.navigate(['/sittaken']);
      } else {
        this.toastr.error('Probablemente ya todos los puestos estén ocupados o el viaje inició, ingresa un nuevo filtro');
      }

    });
    
    
  }
}
