import { Component, OnInit } from '@angular/core';
import { InstruccionesUsuarioService } from 'src/app/services/instrucciones-usuario.service';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-mis-instrucciones',
  templateUrl: './mis-instrucciones.component.html',
  styleUrls: ['./mis-instrucciones.component.scss']
})
export class MisInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;
  constructor(private router: Router, private instruccionesUsuarioService: InstruccionesUsuarioService) { }

  ngOnInit() {
    const idUsuario = localStorage.getItem('idUsuario');
    this.instruccionesUsuarioService.getInstruccionesUsuario(idUsuario).subscribe(
      res => {
        console.log(res);
        this.instrucciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  nomegusta(idInstruccionUsuario) {
    console.log('Id Instruccion: ', idInstruccionUsuario);
    this.instruccionesUsuarioService.eliminarInstruccionUsuario(idInstruccionUsuario).subscribe(
      res => {
        console.log(res);

        this.instrucciones = res;
        this.router.navigate(['/mInstrucciones']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
