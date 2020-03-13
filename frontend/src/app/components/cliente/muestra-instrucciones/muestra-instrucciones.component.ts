import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { InstruccionesUsuarioService } from 'src/app/services/instrucciones-usuario.service';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Router } from '@angular/router';
import { InstruccionUsuario } from 'src/app/modelo/instruccionesUsuario';
import { Lenguaje } from 'src/app/modelo/lenguajes';
import { first } from 'rxjs/operators';
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
      }
      ,
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
  muestraInstrucciones(id) {

    this.instruccionesService.getInstruccionesLenguaje(id).subscribe(
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
    const idUsuario: number = parseInt(localStorage.getItem('idUsuario'));

    const instruccionesUsuario: InstruccionUsuario = { idInstruccion: idInstruccion, idUsuario: idUsuario };
    this.instruccionesUsuarioService.saveInstruccionUsuario(instruccionesUsuario).pipe(first()).subscribe(
      data => {
        if (data.status === 200) {

          alert('La instrucción que quieres guardar ya la tienes');
          this.router.navigate(['/misInstrucciones']);

        } else {
          alert(data.message);
          this.router.navigate(['/misInstrucciones']);
        }
      },
      error => {
        alert(error);
      });
  }

}


