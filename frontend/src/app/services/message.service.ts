import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../modelo/contacto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class MessageService {
  constructor(private http: HttpClient) { }
  sendMessage(body): Observable<any> {
    console.log('Contacto: ' + body);
    return this.http.post('http://localhost:3000/formulario', body);
  }
  /*private api = 'https://mailthis.to/rodri_9134@hotmail.com';
  sendMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(

      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )

  }*/
}
