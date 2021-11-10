import { Injectable } from '@angular/core';
import {Asistencia} from './asistencia.model'
import { DataBaseService } from '../services/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  

  public registroAsistencia : Asistencia [] = [];
  asistencia: Asistencia;
  db: DataBaseService;
  
  constructor(db :DataBaseService) {
    this.db=db;
    console.log('xxxx-0 ');
   }

   getDatabaseState()
   {
     return this.db.getDatabaseState();
   }

  //para mostrar registro de asistencia
  getRegistro(){
    console.log('xxxx-6 ');
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.db.getRegistro().subscribe(asistencias => {
          this.registroAsistencia = asistencias;
        });
      }
    });
    return this.registroAsistencia;
  }
  //para retornar detalles de asistencia segun id solicitado
  getDetalle(asistenciaId :string): Promise<Asistencia> 
  {
    console.log('xxxx-7 ');
    return this.db.getAsistencia(asistenciaId).then(data => {
      this.asistencia = data;
      console.log('xxxx-8 ');
      return this.asistencia;
    });

  }

  //agregar registro 
  addRegistro(fecha:string, asignatura :string, profesor:string, hora: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.db.addAsistencia(fecha, asignatura, profesor, hora);
      }
    });
  }

  updateRegistro(id: string, fecha:string, asignatura: string, profesor:string, hora:string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        console.log('Modificar asistencia');
        this.db.updateAsistencia(fecha, asignatura,profesor,hora,id);
      }
    });
  }

  deleteRegistro(id:string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.db.deleteAsistencia(id);
      }
    });
  }
}
