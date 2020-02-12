/*import { NgModule } from '@angular/core';*/
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AvisoLegalComponent } from './components/avisolegal/avisolegal.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent} from './components/principal/principal.component';
const routes: Routes = [
  {
    path: '', // alias o ruta
    redirectTo: '/',
    pathMatch: 'full'
    // component: LoginComponent, // Importación del componente


  },
  {

    path: '', // alias o ruta
    component: PrincipalComponent // Importación del componente
  }
  ,
  {

    path: 'login', // alias o ruta
    component: LoginComponent // Importación del componente
  },
  {

    path: 'aviso', // alias o ruta

    component: AvisoLegalComponent // Importación del componente
  }
  ,
  {
    path: 'privacidad', // alias o ruta
    component: PrivacidadComponent, // Importación del componente

  },
  {
    path: 'registro',
    component: RegistroComponent,
  }
  ,
  {
    path: 'informacion',
    component: InformacionComponent,
  }
  ,
  {
    path: 'torneos',
    component: TorneosComponent,
  }
  ,
  {
    path: 'contacto',
    component: ContactoComponent,
  }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
