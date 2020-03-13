import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../modelo/tiendas';
@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  constructor(private http: HttpClient) { }
  getTiendas2(): Observable<any> {
    return this.http.get('http://localhost:3000/tiendas');

  }

  getTienda(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/tiendas/' + id);
  }
  saveTiendas(tienda: Tienda): Observable<any> {
    console.log(tienda);
    return this.http.post('http://localhost:3000/tiendas', tienda);
  }
  deleteTiendas(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/tiendas/' + id);
  }
  updateTiendas(id: string, tienda: Tienda): Observable<any> {
    return this.http.put('http://localhost:3000/tiendas/', tienda);
  }
}
