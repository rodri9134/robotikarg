import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { InstruccionesUsuarioService } from 'src/app/services/instrucciones-usuario.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Router } from '@angular/router';
import { InstruccionUsuario } from 'src/app/modelo/instruccionesUsuario';
@Component({
  selector: 'app-admin-instrucciones',
  templateUrl: './admin-instrucciones.component.html',
  styleUrls: ['./admin-instrucciones.component.scss']
})
export class AdminInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;
  private instruccionUsuario: InstruccionUsuario;
  constructor(private router: Router, private instruccionesService: InstruccionesService, private instruccionesUsuarioService: InstruccionesUsuarioService) { }

  ngOnInit() {
    this.instruccionesService.getInstrucciones().subscribe(
      res => {
        console.log(res);
        this.instrucciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
