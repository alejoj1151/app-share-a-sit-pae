import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { Router } from '@angular/router';
import { OffersitComponent } from '../offersit/offersit.component';
import { AppComponent } from '../app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private vehicleService: VehicleService,private router : Router, private appcomp : AppComponent, private toastr: ToastrService) { }

  ngOnInit() {
    this.appcomp.desactivarBoton(false);
    this.appcomp.mostrarcerrarsesion(true);
  }

  nomusuario = localStorage.getItem("nombreusuario");
  listavehiculos:JSON;

  ClickBotonPedirPuesto() {
    this.vehicleService.ispassengertravelService().subscribe((mensaje: any)=> {
      if (mensaje == true) {
        this.toastr.success('Ya solicitaste un puesto');
        this.router.navigate(['/sittaken']);
      }
      else
      this.router.navigate(['/asksit']);
    });
    
  }

  ClickBotonOfrecerPuesto() {
    this.vehicleService.isdrivertravelService().subscribe((mensaje: any)=> {
      if (mensaje == true) {
        this.toastr.success('Ya registraste un viaje');
        this.router.navigate(['/offered']);
      }
      else
      this.router.navigate(['/offersit']);
    });
  }

}

/*
this.vehicleService.gelistvehicles(this.listavehiculos).subscribe((listvehiclesjson : any) =>{
      localStorage.setItem("listavehiculos",listvehiclesjson);
      //console.log(listvehiclesjson);
    });
    console.log(localStorage.getItem("listavehiculos"));
    //localStorage.setItem("vehiculos",JSON.stringify(this.listavehiculos));


*/