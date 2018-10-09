import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-offered',
  templateUrl: './offered.component.html',
  styleUrls: ['./offered.component.css']
})
export class OfferedComponent implements OnInit {

  constructor(private appcomp : AppComponent) { }

  ngOnInit() {
    this.appcomp.desactivarBoton(false);
    this.appcomp.mostrarcerrarsesion(true);
  }

  iniciarViaje(){
    
  }
}
