import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavinvComponent } from './components/navinv/navinv.component';
import { NavcliComponent } from './components/navcli/navcli.component';
import { AvisoLegalComponent } from './components/avisolegal/avisolegal.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {EncrDecrService} from './services/encr-decr-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponentComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ClientesComponent,
    AdminComponent,
    NavinvComponent,
    NavcliComponent,
    AvisoLegalComponent,
    PrivacidadComponent,
    RegistroComponent,
    ContactoComponent,
    TorneosComponent,
    InformacionComponent,
    PrincipalComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
