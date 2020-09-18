import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }