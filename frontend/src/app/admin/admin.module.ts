/*import { NgModule } from '@angular/core';*/
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { NavAdministradorComponent } from '../components/nav-administrador/nav-administrador.component';
import { InicioAdminComponent } from '../components/admin/inicio-admin/inicio-admin.component';
import { AdminArticulosComponent } from '../components/admin/admin-articulos/admin-articulos.component';
import { AdminInstruccionesComponent } from '../components/admin/admin-instrucciones/admin-instrucciones.component';
import { AdminTorneosComponent } from '../components/admin/admin-torneos/admin-torneos.component';
import { AdminEditarArticulosComponent } from '../components/admin/admin-editar-articulos/admin-editar-articulos.component';
import { AdminEditarInstruccionesComponent } from '../components/admin/admin-editar-instrucciones/admin-editar-instrucciones.component';
import { AdminEditarTorneosComponent } from '../components/admin/admin-editar-torneos/admin-editar-torneos.component';
import { GuardaLoginAdminGuard } from '../services/guarda-login-admin.guard';
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
    path: 'navAdministrador',
    component: NavAdministradorComponent,
    canActivate: [GuardaLoginAdminGuard]
  },
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
    canActivate: [GuardaLoginAdminGuard]
  }, {
    path: 'admin_instrucciones',
    component: AdminInstruccionesComponent,
    canActivate: [GuardaLoginAdminGuard]
  }, {
    path: 'admin_torneos',
    component: AdminTorneosComponent,
    canActivate: [GuardaLoginAdminGuard]
  }, {
    path: 'admin_editar_articulos',
    component: AdminEditarArticulosComponent,
    canActivate: [GuardaLoginAdminGuard]
  }, {
    path: 'admin_editar_instrucciones',
    component: AdminEditarInstruccionesComponent,
    canActivate: [GuardaLoginAdminGuard]
  }, {
    path: 'admin_editar_torneos',
    component: AdminEditarTorneosComponent,
    canActivate: [GuardaLoginAdminGuard]
  }];
export class AdminModule { }
