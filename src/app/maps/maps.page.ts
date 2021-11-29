import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
declare var google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {



  map: any;
  currentPostion: object;
  latitude: number;
  longitude: number;
  campo: string;
  coordinates={
    latitude: 0,
    longitude: 0
  };

  @ViewChild("maps", {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(public geolocation:Geolocation) {

    this.geolocation.getCurrentPosition().then((geoposition:Geoposition) => {
      this.latitude = geoposition.coords.latitude;
      this.longitude = geoposition.coords.longitude;
    });
    
   }

  ionViewDidEnter()
  {
    this.showMap();
  }

  showMap()
  {
    if(this.coordinates.latitude == 0)
    {
      this.geolocation.getCurrentPosition().then((geoposition:Geoposition) => {
        const location = new google.maps.LatLng(geoposition.coords.latitude, geoposition.coords.longitude)
        const options = {
          center: location, 
          zoom: 17,
          disableDefaultUI: true
        }
  
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      })
    }
    else
    {
      const location = new google.maps.LatLng(this.coordinates.latitude, this.coordinates.longitude)
      const options = {
        center: location, 
        zoom: 17,
        disableDefaultUI: true
      }
  
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    }
    
  }

  ngOnInit() {
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

}



