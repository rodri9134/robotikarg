import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './views/main/main.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { ChangesComponent } from './components/changes/changes.component';
import { Componente1Component } from './views/componente1/componente1.component';
import { Componente2Component } from './views/componente2/componente2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AdminComponent } from './components/admin/admin.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { IniclientesComponent } from './views/iniclientes/iniclientes.component';
import { IniadminComponent } from './views/iniadmin/iniadmin.component';
import { NavinvComponent } from './components/navinv/navinv.component';
import { NavcliComponent } from './components/navcli/navcli.component';
import { AvisolegalComponent } from './components/avisolegal/avisolegal.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { AvisoComponent } from './views/aviso/aviso.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PrincipalComponent,
    ErrorComponentComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ChangesComponent,
    Componente1Component,
    Componente2Component,
    NavbarComponent,
    ClientesComponent,
    AdminComponent,
    IniclientesComponent,
    IniadminComponent,
    NavinvComponent,
    NavcliComponent,
    AvisolegalComponent,
    PrivacidadComponent,
    AvisoComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
