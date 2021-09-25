import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Usuario[]=[
    {
      user: 'bvega',
      password: '123456'
    },
    {
      user: 'afarias',
      password: '987654'
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
  addUsuario( user: string, password: string)
  {
    this.listaUsuario.push(
      {
       
        user,
        password
      }
    );   
  }
}

