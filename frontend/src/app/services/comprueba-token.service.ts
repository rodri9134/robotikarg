import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
// import { GuardaLoginUserGuard } from './guarda-login-user.guard';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class CompruebaTokenService implements HttpInterceptor {

  constructor(private usuariosservice: UsuariosService) {
  }
  intercept(req: any, next: any) {
    const token1 = req.clone({
      setHeaders: {
        Autorization: 'Robotikarg' + this.usuariosservice.getToken()
      }
    });
    return next.handle(token1);

  }
}

