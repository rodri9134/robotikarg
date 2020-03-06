import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { LenguajesService } from 'src/app/services/lenguajes.service';
@Component({
  selector: 'app-admin-insertar-instrucciones',
  templateUrl: './admin-insertar-instrucciones.component.html',
  styleUrls: ['./admin-insertar-instrucciones.component.scss']
})
export class AdminInsertarInstruccionesComponent implements OnInit {
  public insertarInstruccionForm: FormGroup;
  public lenguajes: LenguajesService;
  public instrucciones: InstruccionesService;

  constructor(private router: Router, private formBuilder: FormBuilder, private instruccionesService: InstruccionesService, private lenguajesService: LenguajesService) {
    this.insertarInstruccionForm = formBuilder.group({
      id: [''],
      instruccion: ['', [Validators.required]],
      accion: ['', [Validators.required]],
      idLenguaje: [''],

    });

   }

   ngOnInit() {
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

insertarInstruccion(){
  this.instruccionesService.saveInstruccion(this.insertarInstruccionForm.value).subscribe(
    res => {
      console.log(res);
      this.instrucciones = res;
      this.router.navigate(['/admin_instrucciones']);
    }
    ,
    err => {
      console.log(err);
    }
  );

}
  get id() {
    return this.insertarInstruccionForm.get('id');
  }
  get instruccion() {
    return this.insertarInstruccionForm.get('instruccion');
  }
  get accion() {
    return this.insertarInstruccionForm.get('accion');
  }
  get idLenguaje() {
    return this.insertarInstruccionForm.get('idLenguaje');
  }

}

