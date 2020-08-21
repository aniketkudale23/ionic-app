import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HomePage } from './home/home.page';

import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { IonicStorageModule } from '@ionic/storage';


import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from '@ionic/angular';














@NgModule({
  declarations: [AppComponent, RegisterComponent, HomePage, LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    
    
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    IonicStorageModule.forRoot(),
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
