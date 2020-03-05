import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lenguaje } from '../modelo/lenguajes';


@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  constructor(private http: HttpClient) { }

  getLenguajes(): Observable <any> {
    return this.http.get('http://localhost:3000/lenguajes');

  }

  getLenguaje(id: string): Observable <any> {
    return this.http.get('http://localhost:3000/lenguajes/${id}');
  }
  saveLenguaje(lenguaje: Lenguaje): Observable < any > {
    console.log(lenguaje);
    return this.http.post('http://localhost:3000/lenguajes', lenguaje);
  }
  deleteLenguaje(id: string): Observable < any > {
    return this.http.delete('http://localhost:3000/lenguajes/${id}');
  }
  updateLenguaje(id: string, lenguaje: Lenguaje): Observable < any > {
    return this.http.put('http://localhost:3000/lenguajes/${id}', lenguaje);
  }
}

