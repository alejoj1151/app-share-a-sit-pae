import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Bienvenido a Share a Sit';
  constructor(private router : Router,private cdRef:ChangeDetectorRef) { }
  a: Boolean = true;
  showcerrar : Boolean= true;

  ngOnInit() {
    this.showcerrar=false;
  }

  desactivarBoton(valor){
    console.log(valor);
    if (valor == true) {
      this.a = true;
      this.cdRef.detectChanges();
    } else {
      this.a = false;
      this.cdRef.detectChanges();
    }
  }
  
  cerrarSesion(){
    localStorage.removeItem("tokenID");
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  mostrarcerrarsesion(valor){
    if (valor == true) {
      this.showcerrar = true;
      this.cdRef.detectChanges();
    } else {
      this.showcerrar = false;
      this.cdRef.detectChanges();
    }
  }

 

}
