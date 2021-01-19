import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneosService } from 'src/app/services/torneos.service';
import { Torneo } from '../../../modelo/torneos';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { RangoEdadService } from 'src/app/services/rango-edad.service';
import { FileUploadService } from '../../../services/file-upload-service.service';
@Component({
  selector: 'app-admin-insertar-torneos',
  templateUrl: './admin-insertar-torneos.component.html',
  styleUrls: ['./admin-insertar-torneos.component.scss']
})
export class AdminInsertarTorneosComponent implements OnInit {
  public insertarTorneoForm: FormGroup;
  private imagen2: any;
  public torneos: TorneosService;
  public provincias: ProvinciasService;
  public rangoEdades: RangoEdadService;
  http: any;

  // tslint:disable-next-line: max-line-length
  constructor(private fileUploadService:FileUploadService,private router: Router, private formBuilder: FormBuilder, private provinciasService: ProvinciasService, private rangoEdadService: RangoEdadService, private torneosService: TorneosService) {

    this.insertarTorneoForm = formBuilder.group({
      imagen: [''],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      enlace: ['', [Validators.required]],
      pagina: ['', [Validators.required]],
      costeEquipo: ['', [Validators.required]],
      idProvincia: ['', [Validators.required]],
      idRangoEdad: ['', [Validators.required]],

    });

  }

  ngOnInit() {
    this.torneosService.getTorneos().subscribe(
      res => {
        console.log(res);
        this.torneos = res;
      }
      ,
      err => {
        console.log(err);
      }
    );
    this.rangoEdadService.getRangoEdades().subscribe(
      res => {
        console.log(res);
        this.rangoEdades = res;
      }
      ,
      err => {
        console.log(err);
      }
    );
    this.provinciasService.getProvincias().subscribe(
      res => {
        console.log(res);
        this.provincias = res;
      }
      ,
      err => {
        console.log(err);
      }
    );

  }

  insertarTorneo() {
    this.torneosService.saveTorneo(this.insertarTorneoForm.value).subscribe(
      res => {
        console.log(res);
        this.torneos = res;
        this.router.navigate(['/admin_torneos']);
      }
      ,
      err => {
        console.log(err);
      }
    );

  }
  fileToUpload: File = null;
  subirImagen(files: FileList) {
    this.fileToUpload = files.item(0);
}
uploadFileToActivity() {
  this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}
  subirImagen2(event: any): void {
    this.imagen2 = event.target.files[0];

  }
  get imagen() {
    return this.insertarTorneoForm.get('imagen');
  }

  get nombre() {
    return this.insertarTorneoForm.get('nombre');
  }
  get fecha() {
    return this.insertarTorneoForm.get('fecha');
  }
  get ubicacion() {
    return this.insertarTorneoForm.get('ubicacion');
  }
  get enlace() {
    return this.insertarTorneoForm.get('enlace');
  }
  get pagina() {
    return this.insertarTorneoForm.get('pagina');
  }
  get costeEquipo() {
    return this.insertarTorneoForm.get('costeEquipo');
  }
  get idProvincia() {
    return this.insertarTorneoForm.get('idProvincia');
  }
  get idRangoEdad() {
    return this.insertarTorneoForm.get('idRangoEdad');
  }
}
