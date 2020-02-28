import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { NavcliComponent } from '../components/navcli/navcli.component';
import { GuardaLoginUserGuard } from '../services/guarda-login-user.guard';
import { MuestraInstruccionesComponent } from '../components/cliente/muestra-instrucciones/muestra-instrucciones.component';
import { MuestraArticulosComponent } from '../components/cliente/muestra-articulos/muestra-articulos.component';
import { EditarPerfilComponent } from '../components/cliente/editar-perfil/editar-perfil.component';
import { MisInstruccionesComponent } from '../components/cliente/mis-instrucciones/mis-instrucciones.component';

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

  }
];
export class UsuarioModule { }
