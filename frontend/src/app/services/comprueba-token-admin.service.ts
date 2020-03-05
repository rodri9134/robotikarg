import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class CompruebaTokenAdminService implements HttpInterceptor {

  constructor(private usuariosservice: UsuariosService) {
  }
  intercept(req: any, next: any) {
    const token1 = req.clone({
      setHeaders: {
        Autorization: 'Admin' + this.usuariosservice.getAdminToken()
      }
    });
    return next.handle(token1);

  }
}

