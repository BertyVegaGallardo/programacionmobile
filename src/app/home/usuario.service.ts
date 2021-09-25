import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Usuario[]=[
    {
      user: 'bvega',
      password: '123456',
      pregunta: '¿Color favorito?',
      respuesta: 'azul'
    },
    {
      user: 'afarias',
      password: '987654',
      pregunta: '¿Nombre de mascota infancia?',
      respuesta: 'black'
    }
];
  constructor() {
  }
  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.user === usuarioInput })
           }
    }
  addUsuario( user: string, password: string, pregunta:string, respuesta:string)
  {
    this.listaUsuario.push(
      {    
        user,
        password,
        pregunta,
        respuesta
      }
    );   
  }
   modUsuario( usuario: string, password: string)
   {
     var nuevaPass = this.getUsuario(usuario);
     nuevaPass.password = password;
   }



}

