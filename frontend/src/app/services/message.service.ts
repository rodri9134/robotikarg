import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contacto} from '../modelo/contacto';
import { Observable } from 'rxjs';
@Injectable()
export class MessageService {
  constructor(private http: HttpClient) { }
  sendMessage(body): Observable<any>  {
    return this.http.post('http://localhost:3000/formulario/${id}', body);
  }
}