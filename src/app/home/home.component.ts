import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { Router } from '@angular/router';
import { OffersitComponent } from '../offersit/offersit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private vehicleService: VehicleService,private router : Router) { }

  ngOnInit() {
  }

  nomusuario = localStorage.getItem("nombreusuario");
  listavehiculos:JSON;

  

}

/*
this.vehicleService.gelistvehicles(this.listavehiculos).subscribe((listvehiclesjson : any) =>{
      localStorage.setItem("listavehiculos",listvehiclesjson);
      //console.log(listvehiclesjson);
    });
    console.log(localStorage.getItem("listavehiculos"));
    //localStorage.setItem("vehiculos",JSON.stringify(this.listavehiculos));


*/