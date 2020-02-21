import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/modelo/articulos';
import { ArticulosService } from 'src/app/services/articulos.service';
@Component({
  selector: 'app-muestra-articulos',
  templateUrl: './muestra-articulos.component.html',
  styleUrls: ['./muestra-articulos.component.scss']
})
export class MuestraArticulosComponent implements OnInit {
  private articulos: Articulo;
  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(
      res => {

        console.log(res);
        this.articulos = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}


