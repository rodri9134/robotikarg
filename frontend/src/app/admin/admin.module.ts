/*import { NgModule } from '@angular/core';*/
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PrincipalComponent } from '../components/principal/principal.component';

import { InicioAdminComponent } from '../components/admin/inicio-admin/inicio-admin.component';
import { AdminArticulosComponent } from '../components/admin/admin-articulos/admin-articulos.component';
import { AdminInstruccionesComponent } from '../components/admin/admin-instrucciones/admin-instrucciones.component';
import { AdminTorneosComponent } from '../components/admin/admin-torneos/admin-torneos.component';
import { AdminEditarArticulosComponent } from '../components/admin/admin-editar-articulos/admin-editar-articulos.component';
import { AdminEditarInstruccionesComponent } from '../components/admin/admin-editar-instrucciones/admin-editar-instrucciones.component';
import { AdminEditarTorneosComponent } from '../components/admin/admin-editar-torneos/admin-editar-torneos.component';
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
    path: 'Login',
    component: LoginComponent,
  },
   {
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
  }];
export class AdminModule { }
