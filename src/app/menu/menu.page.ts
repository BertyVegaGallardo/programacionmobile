import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSelacionado : number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Asistencias',
      url: '/menu/asistencias',
      icono: 'calendar'
    },
    {
      titulo: 'Encuentra tu profesor',
      url: '/menu/list-profe',
      icono: 'person'
    },
    {
      titulo: 'Geolocalizacion',
      url: '/menu/maps',
      icono: 'locate'
    },
    {
      titulo: 'GoogleMaps',
      url: '/menu/map',
      icono: 'locate'
    }
  ]

  constructor(public alertCtrl: AlertController, public navCtrl :  NavController) { }

  ngOnInit() {
  }
  cambiarIndiceSelacionado(i){
    this.indiceSelacionado = i;
  }

  async salir(){
    const alert = await this.alertCtrl.create({
      header : 'Salir',
      message : '¿Estas seguro de salir?',
      buttons: [
        {
          text : 'No',
          handler: () => {

          }
        },
        {
          text : 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }



}
