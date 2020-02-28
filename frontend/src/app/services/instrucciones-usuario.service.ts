import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import { InstruccionUsuario } from '../modelo/instruccionesUsuario';

@Injectable({
  providedIn: 'root'
})
export class InstruccionesUsuarioService {

  constructor(private http: HttpClient) { }

  getInstruccionesUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/' + id);
  }
  /*
    getInstruccion(id: string): Observable<any> {
      return this.http.get('http://localhost:3000/instrucciones/${id}');
    }*/
  saveInstruccionUsuario(idInstruccion: string, idUsuario: string): Observable<any> {
    console.log('Id instruccion ' + idInstruccion);
    console.log('idusuario ' + idUsuario);
    return this.http.post('http://localhost:3000/instrucciones/instruccionUsuario/' + idInstruccion, idUsuario);
  }
  eliminarInstruccionUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/' + id);
  }
}
