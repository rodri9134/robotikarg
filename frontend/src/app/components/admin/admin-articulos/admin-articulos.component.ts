import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Articulo } from 'src/app/modelo/articulos';

import { ArticulosService } from 'src/app/services/articulos.service';
@Component({
  selector: 'app-admin-articulos',
  templateUrl: './admin-articulos.component.html',
  styleUrls: ['./admin-articulos.component.scss']
})
export class AdminArticulosComponent implements OnInit {
  private articulos: Articulo;
  constructor(private router:Router,private articulosService: ArticulosService) { }

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
  editar(id) {
 const articulo=this.articulosService.getArticulo(id);
 this.router.navigate(['/admin_editar_articulos']);
  }
  eliminar(id) {
    this.articulosService.deleteArticulo(id).subscribe(res => {
        this.router.navigate(['/admin_articulos']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
