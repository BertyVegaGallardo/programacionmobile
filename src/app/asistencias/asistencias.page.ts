import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from './asistencia.service'


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  registroAsistencia =[];

  constructor(private AsistenciaService : AsistenciaService) { }

  ngOnInit() {
    this.registroAsistencia=this.AsistenciaService.getAsistencia();
  }

}
