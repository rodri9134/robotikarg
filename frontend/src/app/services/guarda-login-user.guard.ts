import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class GuardaLoginUserGuard implements CanActivate {
  constructor(private router: Router, private Usuario: UsuariosService) {

  }
  canActivate(): boolean {
    if (this.Usuario.logIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

    /*
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;*/
  }

}
