import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from './asistencia.service';



@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  registroAsistencia =[];
  asistenciaService : AsistenciaService;

  constructor( AsistenciaService : AsistenciaService) { 
    this.asistenciaService = AsistenciaService;
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("XXX");
   this.registroAsistencia=this.asistenciaService.getRegistro();
  }



}
