import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torneo } from '../modelo/torneos';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  constructor(private http: HttpClient) { }
  getTorneos(): Observable<any> {
    return this.http.get('http://localhost:3000/torneos');

  }

  getTorneo(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/torneos/${id}');
  }
  saveTorneo(torneo: Torneo): Observable<any> {
    console.log(torneo);
    return this.http.post('http://localhost:3000/torneos', torneo);
  }
  deleteTorneo(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/torneos/${id}');
  }
  updateTorneo(id: string, torneo: Torneo): Observable<any> {
    return this.http.put('http://localhost:3000/torneos/${id}', torneo);
  }
}
