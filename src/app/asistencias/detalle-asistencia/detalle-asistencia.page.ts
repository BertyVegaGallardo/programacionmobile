import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{AsistenciaService} from '../asistencia.service'
import{Asistencia} from '../asistencia.model'

@Component({
  selector: 'app-detalle-asistencia',
  templateUrl: './detalle-asistencia.page.html',
  styleUrls: ['./detalle-asistencia.page.scss'],
})
export class DetalleAsistenciaPage implements OnInit {
asistencia : Asistencia;

  constructor(private activatedRoute: ActivatedRoute, 
    private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const idRegistroRecibido=paramMap.get('registroId');
        this.asistencia = this.asistenciaService.getDetalle('idRegistroRecibido');
      })
    


  }

}
