import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { CommonModule, NumberFormatStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';

declare var google: any;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {
    
    maps: any;

@ViewChild("maps", {read:ElementRef, static:false}) mapRef: ElementRef;

constructor () {}

showMap()
{
  const location = new google.maps.LatLng(17.824858, 31.052838)
}

  
}