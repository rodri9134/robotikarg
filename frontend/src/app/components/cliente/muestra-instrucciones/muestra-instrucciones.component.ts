import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { InstruccionesUsuarioService } from 'src/app/services/instrucciones-usuario.service';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Router } from '@angular/router';
import { InstruccionUsuario } from 'src/app/modelo/instruccionesUsuario';
import { Lenguaje } from 'src/app/modelo/lenguajes';
@Component({
  selector: 'app-muestra-instrucciones',
  templateUrl: './muestra-instrucciones.component.html',
  styleUrls: ['./muestra-instrucciones.component.scss']
})
export class MuestraInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;
  private instruccionUsuario: InstruccionUsuario;
  private lenguajes: Lenguaje;
  // tslint:disable-next-line: max-line-length
  constructor(private lenguajesService: LenguajesService, private router: Router, private instruccionesService: InstruccionesService, private instruccionesUsuarioService: InstruccionesUsuarioService) { }

  ngOnInit() {
    this.lenguajesService.getLenguajes().subscribe(
      res => {
        console.log(res);
        this.lenguajes = res;
      },
      err => {
        console.log(err);
      }
    );
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
  muestraInstrucciones() {

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
  megusta(idInstruccion) {
    console.log('Id Instruccion: ', idInstruccion);
    const idUsuario = localStorage.getItem('idUsuario');
    this.instruccionesService.guardarInstruccionUsuario(idInstruccion, idUsuario).subscribe(
      data => {
        if (data.status === 200) {
          console.log('Perfil actualizado correctamente.');
          this.router.navigate(['/navCli']);

        } else {
          alert(data.message);
        }
      },
      error => {
        alert(error);
      });
  }

}


