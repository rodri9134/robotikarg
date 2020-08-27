import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TorneosService } from 'src/app/services/torneos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import {RangoEdadService} from 'src/app/services/rango-edad.service';
@Component({
  selector: 'app-admin-editar-torneos',
  templateUrl: './admin-editar-torneos.component.html',
  styleUrls: ['./admin-editar-torneos.component.scss']
})
export class AdminEditarTorneosComponent implements OnInit {


  public editarTorneoForm: FormGroup;
  public torneos: TorneosService;
  public rangoEdades: RangoEdadService;
  public provincias: ProvinciasService;


  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private torneosService: TorneosService, private rangoEdadService: RangoEdadService, private provinciasService: ProvinciasService) {

    this.editarTorneoForm = formBuilder.group({
      id: [''],
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      enlace: ['', [Validators.required]],
      pagina: ['', [Validators.required]],
      costeEquipo: ['', [Validators.required]],
      provincia: [''],
      rangoEdad: [''],

    });
  }

  ngOnInit() {
    const idTorneo = localStorage.getItem('idTorneo');
    this.torneosService.getTorneo(idTorneo).subscribe(
      res => {
        console.log('Torneos: ' + res);
        this.torneos = res;
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
  }

  editarTorneo() {
    const idTorneo = localStorage.getItem('idTorneo');
    this.torneosService.updateTorneo(idTorneo, this.editarTorneoForm.value).subscribe(
      res => {
        this.router.navigate(['/admin_torneos']);
        console.log('Torneo actualizado correctamente');
        this.provincias = res;
        this.rangoEdades = res;
        localStorage.removeItem('idTorneo');
        this.router.navigate(['/admin_torneos']);
      }
      ,
      err => {
        console.log(err);
      }
    );


  }

  get id() {
    return this.editarTorneoForm.get('id');
  }
  get imagen() {
    return this.editarTorneoForm.get('imagen');
  }
  get nombre() {
    return this.editarTorneoForm.get('nombre');
  }
  get fecha() {
    return this.editarTorneoForm.get('fecha');
  }
  get ubicacion() {
    return this.editarTorneoForm.get('ubicacion');
  }
  get enlace() {
    return this.editarTorneoForm.get('enlace');
  }
  get pagina() {
    return this.editarTorneoForm.get('pagina');
  }
  get costeEquipo() {
    return this.editarTorneoForm.get('costeEquipo');
  }
  get provincia() {
    return this.editarTorneoForm.get('provincia');
  }
  get rangoEdad() {
    return this.editarTorneoForm.get('rangoEdad');
  }


}
