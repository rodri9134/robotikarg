/*import { NgModule } from '@angular/core';*/
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { Componente1Component } from './views/componente1/componente1.component';
import { Componente2Component } from './views/componente2/componente2.component';
import { PrincipalComponent} from './views/principal/principal.component';
import { AvisoComponent} from './views/aviso/aviso.component';
const routes: Routes = [
  {
    path: '', // alias o ruta
    redirectTo: '/principal',
    pathMatch: 'full'
    // component: LoginComponent, // Importación del componente


  },
  {

    path: 'principal', // alias o ruta
    component: PrincipalComponent // Importación del componente
  }
  ,
  {

    path: 'login', // alias o ruta
    component: LoginComponent // Importación del componente
  },
  {

    path: 'aviso', // alias o ruta
    
    component: AvisoComponent // Importación del componente
  }
  ,
  {
    path: 'principal', // alias o ruta
    component: PrincipalComponent, // Importación del componente
    children: [
      { path: '', redirectTo: '/principal/aviso', pathMatch: 'full' },
      { path: 'privacidad', component: Componente1Component }

    ]
  }
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
export const APP_ROUTING = RouterModule.forRoot(routes);
