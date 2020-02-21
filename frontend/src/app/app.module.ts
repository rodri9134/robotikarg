import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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

import { NavinvComponent } from './components/navinv/navinv.component';
import { NavcliComponent } from './components/navcli/navcli.component';
import { AvisoLegalComponent } from './components/avisolegal/avisolegal.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EncrDecrService } from './services/encr-decr-service.service';
import { MuestraInstruccionesComponent } from './components/cliente/muestra-instrucciones/muestra-instrucciones.component';
import { MuestraArticulosComponent } from './components/cliente/muestra-articulos/muestra-articulos.component';
import { EditarPerfilComponent } from './components/cliente/editar-perfil/editar-perfil.component';
import { MisInstruccionesComponent } from './components/cliente/mis-instrucciones/mis-instrucciones.component';
import { MessageService } from './services/message.service';
import { AdminInstruccionesComponent } from './components/admin/admin-instrucciones/admin-instrucciones.component';
import { AdminArticulosComponent } from './components/admin/admin-articulos/admin-articulos.component';
import { AdminTorneosComponent } from './components/admin/admin-torneos/admin-torneos.component';
import { AdminEditarInstruccionesComponent } from './components/admin/admin-editar-instrucciones/admin-editar-instrucciones.component';
import { AdminEditarArticulosComponent } from './components/admin/admin-editar-articulos/admin-editar-articulos.component';
import { AdminEditarTorneosComponent } from './components/admin/admin-editar-torneos/admin-editar-torneos.component';
import { InicioAdminComponent } from './components/admin/inicio-admin/inicio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponentComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ClientesComponent,
    NavinvComponent,
    NavcliComponent,
    AvisoLegalComponent,
    PrivacidadComponent,
    RegistroComponent,
    ContactoComponent,
    TorneosComponent,
    InformacionComponent,
    PrincipalComponent,
    MuestraInstruccionesComponent,
    MuestraArticulosComponent,
    EditarPerfilComponent,
    MisInstruccionesComponent,
    AdminInstruccionesComponent,
    AdminArticulosComponent,
    AdminTorneosComponent,
    AdminEditarInstruccionesComponent,
    AdminEditarArticulosComponent,
    AdminEditarTorneosComponent,
    InicioAdminComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [MessageService, EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
