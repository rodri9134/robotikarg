import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RangoEdad } from '../modelo/rangoEdad';
@Injectable({
  providedIn: 'root'
})
export class RangoEdadService {

  constructor(private http: HttpClient) { }
  getRangoEdades(): Observable<any> {
    return this.http.get('http://localhost:3000/rangoEdad');

  }

  getRangoEdad(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/rangoEdad/' + id);
  }
  saveRangoEdad(rangoEdad: RangoEdad): Observable<any> {
    console.log(rangoEdad);
    return this.http.post('http://localhost:3000/rangoEdad', rangoEdad);
  }
  deleteRangoEdad(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/rangoEdad/' + id);
  }
  updateRangoEdad(id: string, rangoEdad: RangoEdad): Observable<any> {
    return this.http.put('http://localhost:3000/rangoEdad/', rangoEdad);
  }
}
