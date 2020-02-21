import { Component, OnInit } from '@angular/core';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { Instruccion } from 'src/app/modelo/instrucciones';
@Component({
  selector: 'app-mis-instrucciones',
  templateUrl: './mis-instrucciones.component.html',
  styleUrls: ['./mis-instrucciones.component.scss']
})
export class MisInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;
  constructor(private instruccionesService: InstruccionesService) { }

  ngOnInit() {
    const idUsuario = localStorage.getItem('idUsuario');
    this.instruccionesService.getInstruccionesUsuario(idUsuario).subscribe(
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
