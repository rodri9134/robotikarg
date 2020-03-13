import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../modelo/provincias';
@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http: HttpClient) { }
  getProvincias(): Observable<any> {
    return this.http.get('http://localhost:3000/provincias');

  }

  getProvincia(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/provincias/' + id);
  }
  saveProvincias(provincia: Provincia): Observable<any> {
    console.log(provincia);
    return this.http.post('http://localhost:3000/provincias', provincia);
  }
  deleteProvincias(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/provincias/' + id);
  }
  updateProvincias(id: string, provincia: Provincia): Observable<any> {
    return this.http.put('http://localhost:3000/provincias/', provincia);
  }
}
