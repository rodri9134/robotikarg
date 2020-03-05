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
    return this.http.get('http://localhost:3000/instruccionesUsuario/' + id);
  }
  /*
    getInstruccion(id: string): Observable<any> {
      return this.http.get('http://localhost:3000/instrucciones/${id}');
    }*/
  saveInstruccionUsuario(instruccionUsuario: InstruccionUsuario): Observable<any> {

    return this.http.post('http://localhost:3000/instruccionesUsuario', instruccionUsuario);
  }
  eliminarInstruccionUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/instruccionesUsuario/eliminarInstruccionUsuario/' + id);
  }
}
