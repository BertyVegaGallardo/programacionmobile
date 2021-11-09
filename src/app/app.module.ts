import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { DataBaseService } from './services/data-base.service';
import {RestService} from './services/rest.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  
  imports: [HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: 
  
  [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    RestService,
    ],
    
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(db: DataBaseService){}

}