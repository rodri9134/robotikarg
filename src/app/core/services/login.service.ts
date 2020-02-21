import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
formulario: any;
  constructor(private http: HttpClient) { }
  checkLogin(): Observable<any> {
    return this.http.get('http://www.mocky.io/v2/5e208a3c300000d796d1f0cf');
  }
  setDatosForm(datos) {

    this.formulario = datos;
  }
  getDatosForm() {
    return this.formulario;
  }
}

