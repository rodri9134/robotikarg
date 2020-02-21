import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private isUserLoggedIn;
  public usserLogged: Usuario;
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
    return this.http.delete('http://localhost:3000/usuarios/' + id);
  }
  updateUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/' + id, usuario);
  }
  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }
  idUsuario(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/idUsuario', usuario);
  }
  logIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    // Al hacer logout quitamos el token
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('idUsuario');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setUserLoggedIn(user: Usuario) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
