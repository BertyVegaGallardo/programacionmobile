import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import{Observable} from 'rxjs';


@Component({
  selector: 'app-list-profe',
  templateUrl: './list-profe.page.html',
  styleUrls: ['./list-profe.page.scss'],
})
export class ListProfePage implements OnInit {

  public datosObservable: Observable<any>;

  constructor(private apirest: RestService) {
    this.datosObservable = this.apirest.getDatos();
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('volver a cargar pagina')
   this.datosObservable=this.apirest.getDatos();
  }

}
