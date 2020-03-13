import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneosService } from 'src/app/services/torneos.service';

import { Torneo } from '../../../modelo/torneos';
@Component({
  selector: 'app-admin-insertar-torneos',
  templateUrl: './admin-insertar-torneos.component.html',
  styleUrls: ['./admin-insertar-torneos.component.scss']
})
export class AdminInsertarTorneosComponent implements OnInit {
  public insertarTorneoForm: FormGroup;
  private imagen2: any;
  public torneos: TorneosService;
  http: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private torneosService: TorneosService) {

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
  subirImagen(event: any): void {
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
