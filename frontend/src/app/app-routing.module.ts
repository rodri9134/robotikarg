/*import { NgModule } from '@angular/core';*/
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AvisoLegalComponent } from './components/avisolegal/avisolegal.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavcliComponent } from './components/navcli/navcli.component';
import { GuardaLoginUserGuard } from './services/guarda-login-user.guard';
import { MuestraInstruccionesComponent } from './components/cliente/muestra-instrucciones/muestra-instrucciones.component';
import { MuestraArticulosComponent } from './components/cliente/muestra-articulos/muestra-articulos.component';
import { EditarPerfilComponent } from './components/cliente/editar-perfil/editar-perfil.component';
import { MisInstruccionesComponent } from './components/cliente/mis-instrucciones/mis-instrucciones.component';
import { InicioAdminComponent } from './components/admin/inicio-admin/inicio-admin.component';
import { AdminArticulosComponent } from './components/admin/admin-articulos/admin-articulos.component';
import { AdminInstruccionesComponent } from './components/admin/admin-instrucciones/admin-instrucciones.component';
import { AdminTorneosComponent } from './components/admin/admin-torneos/admin-torneos.component';
import { AdminEditarArticulosComponent } from './components/admin/admin-editar-articulos/admin-editar-articulos.component';
import { AdminEditarInstruccionesComponent } from './components/admin/admin-editar-instrucciones/admin-editar-instrucciones.component';
import { AdminEditarTorneosComponent } from './components/admin/admin-editar-torneos/admin-editar-torneos.component';
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
  },
  {
    path: 'navCli',
    component: NavcliComponent,
    canActivate: [GuardaLoginUserGuard]
  },
  {
    path: 'mInstrucciones',
    component: MuestraInstruccionesComponent,
    canActivate: [GuardaLoginUserGuard]

  }
  ,
  {
    path: 'mArticulos',
    component: MuestraArticulosComponent,
    canActivate: [GuardaLoginUserGuard]
  },
  {
    path: 'editar_perfil',
    component: EditarPerfilComponent,
    canActivate: [GuardaLoginUserGuard]
  },
  {
    path: 'mis_instrucciones',
    component: MisInstruccionesComponent,
    canActivate: [GuardaLoginUserGuard]

  }, {
    path: 'inicio_admin',
    component: InicioAdminComponent,

  }, {
    path: 'admin_articulos',
    component: AdminArticulosComponent,
  }, {
    path: 'admin_instrucciones',
    component: AdminInstruccionesComponent,
  }, {
    path: 'admin_torneos',
    component: AdminTorneosComponent,
  }, {
    path: 'admin_editar_articulos',
    component: AdminEditarArticulosComponent,
  }, {
    path: 'admin_editar_instrucciones',
    component: AdminEditarInstruccionesComponent,
  }, {
    path: 'admin_editar_torneos',
    component: AdminEditarTorneosComponent,
  }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
