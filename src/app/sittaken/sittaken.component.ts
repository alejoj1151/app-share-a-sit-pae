import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../shared/vehicle.service';
import { AsksitComponent } from '../asksit/asksit.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sittaken',
  templateUrl: './sittaken.component.html',
  styleUrls: ['./sittaken.component.css']
})
export class SittakenComponent implements OnInit {
  

  constructor(private router : Router, private vehicleserive : VehicleService, private appcomp : AppComponent) { }
  
  nombreconductor = localStorage.getItem("nombreconductor");
  placavehiculotomado= localStorage.getItem("placavehiculotomado");

  ngOnInit() {
    this.appcomp.desactivarBoton(false);
    this.appcomp.mostrarcerrarsesion(true);
  }


  //arreglo = this.asksitComp.filtrados;
  

}
