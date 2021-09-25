import { Component, OnInit } from '@angular/core';
import { UsuarioService}  from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  user={
    usuario:''
    
  };
   usuarioServiceS: Usuario;
     //variable para mostrar el campo faltante
   campo: string;

   constructor(private router: Router,
    private usuarioService: UsuarioService) { } // Se debe instanciar
 

  ngOnInit() {
  }

}
