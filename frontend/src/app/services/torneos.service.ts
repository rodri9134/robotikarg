import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torneo } from '../modelo/torneos';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { FileI } from '../modelo/file';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TorneosService { 
  // private postsCollection: AngularFirestoreCollection<Torneo>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(private http: HttpClient) { }
  getTorneos(): Observable<any> {
    return this.http.get('http://localhost:3000/torneos');

  }

  getTorneo(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/torneos/' + id);
  }
  saveTorneo(torneo: Torneo): Observable<any> {
    console.log(torneo);
    return this.http.post('http://localhost:3000/torneos', torneo);
  }
  deleteTorneo(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/torneos/' + id);
  }
  updateTorneo(id: string, torneo: Torneo): Observable<any> {
    return this.http.put('http://localhost:3000/torneos/'+ id, torneo);
  }

  getTorneosProvincia(id: string){
    return this.http.get('http://localhost:3000/torneos/torneosProvincia/' + id);
  }
  getTorneosEdad(id: string){
    return this.http.get('http://localhost:3000/torneos/torneosEdad/' + id);
  }

  /*
  public preaddImage(post: Torneo, image: FileI): void {
    this.uploadImage(post, image);
  }
  private uploadImage(post: Torneo, image: FileI) {
    this.filePath = 'imagenes/${image.name}';
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {

          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            console.log('URLIMAGE', urlImage);
            console.log('Post ', post);
          });
        })

      ).subscribe();
  }*/
}
