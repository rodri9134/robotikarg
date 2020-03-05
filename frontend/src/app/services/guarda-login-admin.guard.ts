import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class GuardaLoginAdminGuard implements CanActivate {
  constructor(private router: Router, private usuarios: UsuariosService) {

  }
  canActivate(): boolean {
    if (this.usuarios.logAdminIn()) {
      return true;
    }
    this.router.navigate(['/navAdmin']);
    return false;


  }

}