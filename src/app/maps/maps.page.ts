import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute , Router, NavigationExtras } from '@angular/router';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation } from '@ionic-native/google-maps';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
declare var google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: GoogleMap;
  loading: any;

  currentPostion: object;
  latitude: number;
  longitude: number;
  campo: string;
  coordinates={
    latitude: 0,
    longitude: 0
  };

  constructor(public toastCtrl: ToastController,public loadingCtrl: LoadingController,public geolocation:Geolocation,public activatedRoute: ActivatedRoute, public router : Router,private platform: Platform) {

    this.geolocation.getCurrentPosition().then((geoposition:Geoposition) => {
      this.latitude = geoposition.coords.latitude;
      this.longitude = geoposition.coords.longitude;
    });
    
   }



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
          snippet: "Esta es tu ubicacion actual",
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

  validateModel(model: any){
    
    for (const [key, value] of Object.entries(model)) {
      
      if (value==='') {
        this.campo=key;
        return false;
      }
    }
    return true;
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
