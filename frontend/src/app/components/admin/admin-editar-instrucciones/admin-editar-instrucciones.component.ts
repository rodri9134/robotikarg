import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { LenguajesService } from 'src/app/services/lenguajes.service';
@Component({
  selector: 'app-admin-editar-instrucciones',
  templateUrl: './admin-editar-instrucciones.component.html',
  styleUrls: ['./admin-editar-instrucciones.component.scss']
})
export class AdminEditarInstruccionesComponent implements OnInit {


  public editarInstruccionForm: FormGroup;
  public lenguajes: LenguajesService;
  public instrucciones: InstruccionesService;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private instruccionesService: InstruccionesService, private lenguajesService: LenguajesService) {

    this.editarInstruccionForm = formBuilder.group({
      id: [''],
      instruccion: ['', [Validators.required]],
      accion: ['', [Validators.required]],
      idLenguaje: [''],

    });
  }

  ngOnInit() {
    const idInstruccion = localStorage.getItem('idInstruccion');
    this.instruccionesService.getInstruccion(idInstruccion).subscribe(
      res => {
        console.log('Instrucciones: ' + res);
        this.instrucciones = res;
      }
      ,
      err => {
        console.log(err);
      }
    );

    this.lenguajesService.getLenguajes().subscribe(
      res => {
        console.log(res);
        this.lenguajes = res;
      }
      ,
      err => {
        console.log(err);
      }
    );
  }

editarInstruccion() {
    const idInstruccion = localStorage.getItem('idInstruccion');
    this.instruccionesService.updateInstruccion(idInstruccion, this.editarInstruccionForm.value).subscribe(
      res => {
        localStorage.removeItem('idInstruccion');
       // this.router.navigate(['/admin_instrucciones']);
        console.log('Instrucción actualizada correctamente');
        this.lenguajes = res;
        this.router.navigate(['/navAdmin']);
      }
      ,
      err => {
        console.log(err);
      }
    );


  }
  get id() {
    return this.editarInstruccionForm.get('id');
  }
  get instruccion() {
    return this.editarInstruccionForm.get('instruccion');
  }
  get accion() {
    return this.editarInstruccionForm.get('accion');
  }
  get idLenguaje() {
    return this.editarInstruccionForm.get('idLenguaje');
  }

}
