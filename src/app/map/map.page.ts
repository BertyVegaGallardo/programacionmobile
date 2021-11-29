import { Component, OnInit } from '@angular/core';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation} from "@ionic-native/google-maps";

import { Platform, LoadingController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map:GoogleMap;
  loading: any;

  constructor(public loadingCtrl: LoadingController,public toastCtrl: ToastController,private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: -2.1537488,
          lng: -79.8883037
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  async localizar() {
    // Limpiar elementos de mapa
    this.map.clear();
    //Msj de espera
    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });
    await this.loading.present();
    this.map.getMyLocation().then((location: MyLocation) => {
        //sacar msj de carga
        this.loading.dismiss();
        //animación
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        })
        // Mostrar marcador de posicion
        let marker: Marker = this.map.addMarkerSync({
          title: "Estoy aquí!",
          snippet: "This plugin is awesome!",
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });
        marker.showInfoWindow();
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });
      })
      .catch(error => {
        // En caso de que haya un problema en obtener la
        // ubicación
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }

  // Función que muestra un Toast en la parte inferior
  // de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }
}