import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }
  getUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/${id}');
  }
  saveUsuario(usuario: Usuario): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }
  deleteUsuario(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/${id}');
  }
  updateUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/${id}', usuario);
  }
  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }
  logIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    // Al hacer logout quitamos el token
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
