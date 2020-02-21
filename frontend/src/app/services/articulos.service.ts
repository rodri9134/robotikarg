import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../modelo/articulos';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }
  getArticulos(): Observable<any> {
    return this.http.get('http://localhost:3000/articulos');

  }

  getArticulo(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/articulos/${id}');
  }
  saveArticulo(articulo:Articulo): Observable<any> {
    console.log(articulo);
    return this.http.post('http://localhost:3000/articulos', articulo);
  }
  deleteArticulo(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/articulos/${id}');
  }
  updateArticulo(id: string, articulo:Articulo): Observable<any> {
    return this.http.put('http://localhost:3000/articulos/${id}', articulo);
  }
}
