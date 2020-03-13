import { Injectable } from '@angular/core';
import { Instruccion } from '../modelo/instrucciones';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstruccionesService {

  constructor(private http: HttpClient) { }
  getInstrucciones(): Observable<any> {
    return this.http.get('http://localhost:3000/instrucciones');
  }
  getInstruccionesLenguaje(id: string): Observable<any> {
    console.log('id ' + id);
    return this.http.get('http://localhost:3000/instrucciones/' + id);
  }
  saveInstruccion(instruccion: Instruccion): Observable<any> {
    console.log(instruccion);
    return this.http.post('http://localhost:3000/instrucciones/', instruccion);
  }
  deleteInstruccion(id: string): Observable<any> {
    console.log('Id a eliminar: '+id);
    return this.http.delete('http://localhost:3000/instrucciones/' + id);
  }
  updateInstruccion(id: string, instruccion: Instruccion): Observable<any> {
    return this.http.put('http://localhost:3000/instrucciones/' + id, instruccion);
  }

  /*
  getInstruccionesUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/'+id);
  }*/
  getInstruccion(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/instrucciones/leerInstrucion/' + id);
  }
  guardarInstruccionUsuario(idInstruccion: string, idUsuario: string): Observable<any> {
    return this.http.post('http://localhost:3000/instrucciones/guardarInstrucciones/' + idInstruccion, idUsuario);
  }
}
