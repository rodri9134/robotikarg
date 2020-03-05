import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UsuariosService = class UsuariosService {
    constructor(http) {
        this.http = http;
    }
    getUsuarios() {
        return this.http.get('http://localhost:3000/usuarios');
    }
    getUsuario(id) {
        return this.http.get('http://localhost:3000/usuarios/${id}');
    }
    saveUsuario(usuario) {
        console.log(usuario);
        return this.http.post('http://localhost:3000/usuarios', usuario);
    }
    deleteUsuario(id) {
        return this.http.delete('http://localhost:3000/usuarios/' + id);
    }
    updateUsuario(id, usuario) {
        return this.http.put('http://localhost:3000/usuarios/' + id, usuario);
    }
    getLogin(usuario) {
        return this.http.post('http://localhost:3000/usuarios/login', usuario);
    }
    getLoginAdmin(usuario) {
        return this.http.post('http://localhost:3000/admin/login', usuario);
    }
    idUsuario(usuario) {
        return this.http.post('http://localhost:3000/usuarios/idUsuario', usuario);
    }
    logIn() {
        return !!localStorage.getItem('token');
    }
    logAdminIn() {
        return !!localStorage.getItem('tokenAdmin');
    }
    logAdminOut() {
        localStorage.removeItem('tokenAdmin');
    }
    getAdminToken() {
        return localStorage.getItem('tokenAdmin');
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
    setUserLoggedIn(user) {
        this.isUserLoggedIn = true;
        this.usserLogged = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
};
UsuariosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuariosService);
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map