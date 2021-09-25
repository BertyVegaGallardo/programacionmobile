import { Injectable } from '@angular/core';
import {Asistencia} from './asistencia.model'

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  registroAsistencia : Asistencia [] = [
    {
      id: '1',
      fecha: '24/09/2021',
      hora:'19:05',
      asignatura: 'Programación de aplicaciones moviles',
      profesor: 'Marcelo Monte'  
    },
    {
      id: '2',
      fecha: '23/09/2021',
      hora:'20:25',
      asignatura: 'Estadistica descriptiva',
      profesor: 'Patricio Muñoz'
    },
    {
      id: '3',
      fecha: '22/09/2021',
      hora:'21:19',
      asignatura: 'Arquitectura de software',
      profesor: 'Guillermo Pinto'
    },
    {
      id: '3',
      fecha: '21/09/2021',
      hora:'20:37',
      asignatura: 'Ingles elemental',
      profesor: 'Ramon Pozo'
    }

  ]

  constructor() { }
  //para mostrar registro de asistencia
  getAsistencia(){
    return [...this.registroAsistencia];
  }
  //para retornar detalles de asistencia segun id solicitado
  getDetalle(registroId :string)
  {
    return{
      ...this.registroAsistencia.find(Asistencia => {return Asistencia.id === registroId})
    }
  }

  //agregar registro 
  addRegistro(fecha:string, asignatura :string, profesor:string, hora: string)
  {
    this.registroAsistencia.push(
      {
        id: this.registroAsistencia.length+1+'',
        fecha,
        asignatura,
        profesor,
        hora
      }
    );
  }
}
