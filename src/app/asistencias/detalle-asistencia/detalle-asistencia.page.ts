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
    private AsistenciaService: AsistenciaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      //de la ruta activa se toma el contactoid declarado en path en app-routing el numero despues del / en el link
      paramMap=>{
        const idContactoRecibido=paramMap.get('asistenciaId'); //recupero el parametro y lo dejo en una constante
        this.asistencia=this.AsistenciaService.getDetalle(idContactoRecibido); //crear en el objeto contacto declarado arriba los detalles de contacto recuperados con la constante 
      }
    );


  }

}
