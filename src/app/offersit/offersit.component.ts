import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-offersit',
  templateUrl: './offersit.component.html',
  styleUrls: ['./offersit.component.css']
})
export class OffersitComponent implements OnInit {

  carro: Vehicle;

  carros: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
