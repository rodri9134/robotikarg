import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../modelo/categorias';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  getCategorias(): Observable<any> {
    return this.http.get('http://localhost:3000/categorias');

  }

  getCategoria(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/categorias/' + id);
  }
  saveCategorias(categoria: Categoria): Observable<any> {
    console.log(categoria);
    return this.http.post('http://localhost:3000/categorias', categoria);
  }
  deleteCategorias(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/categorias/' + id);
  }
  updateCategorias(id: string, categoria: Categoria): Observable<any> {
    return this.http.put('http://localhost:3000/categorias/', categoria);
  }
}
