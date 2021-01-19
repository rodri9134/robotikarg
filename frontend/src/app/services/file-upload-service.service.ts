
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {

   }
   postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'assets/imagenes/';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    console.log(fileToUpload+" "+fileToUpload.name);
    return this.http
      .post(endpoint, formData).map(() => { return true; }).catch((e) => e);
}
}
