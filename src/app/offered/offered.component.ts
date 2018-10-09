import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { VehicleService } from '../shared/vehicle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-offered',
  templateUrl: './offered.component.html',
  styleUrls: ['./offered.component.css']
})
export class OfferedComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private toastr: ToastrService, private appcomp : AppComponent) { }

  pasajeros = []; //pasajeros registrados

  nombreusuario = localStorage.getItem("nombreusuario");
  vehicleNumber = localStorage.getItem("vehicleNumber");

  ngOnInit() {
    this.listaPasajeros();
    this.appcomp.desactivarBoton(false);
    this.appcomp.mostrarcerrarsesion(true);
  }

  listaPasajeros() {
    this.pasajeros=[];
    this.vehicleService.getpassengertravelDriver().subscribe((passengerslistjson:any) =>{
      if (passengerslistjson !== null && passengerslistjson !== 0) {
        this.toastr.success('Tienes un viaje con pasajeros esperando');
      }
      else{
        this.toastr.error('No hay pasajeros registrados');
      return false;}
      
      for (var i=0; i < passengerslistjson.length; i++){
        var obj = passengerslistjson[i];
        this.pasajeros.push(passengerslistjson[i]);
        
      }

  });
}

}
