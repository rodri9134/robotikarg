import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { InstruccionesService } from 'src/app/services/instrucciones.service';

@Component({
  selector: 'app-muestra-instrucciones',
  templateUrl: './muestra-instrucciones.component.html',
  styleUrls: ['./muestra-instrucciones.component.scss']
})
export class MuestraInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;

  constructor(private instruccionesService: InstruccionesService) { }

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


