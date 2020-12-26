import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/modelo/articulos';
import { Tienda } from 'src/app/modelo/tiendas';
import { Categoria } from 'src/app/modelo/categorias';
import { ArticulosService } from 'src/app/services/articulos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TiendasService } from 'src/app/services/tiendas.service';
@Component({
  selector: 'app-admin-articulos',
  templateUrl: './admin-articulos.component.html',
  styleUrls: ['./admin-articulos.component.scss']
})
export class AdminArticulosComponent implements OnInit {
  private articulos: Articulo;
  private tiendas: Tienda;
  private categorias: Categoria;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private articulosService: ArticulosService, private categoriasService: CategoriasService, private tiendasService: TiendasService) { }

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

    this.tiendasService.getTiendas2().subscribe(
      res => {
        console.log(res);
        this.tiendas = res;
      }
      ,
      err => {
        console.log(err);
      }
    );
    this.categoriasService.getCategorias().subscribe(
      res => {
        console.log(res);
        this.categorias = res;
      }
      ,
      err => {
        console.log(err);
      }
    );
  }
  refresh(): void {
    window.location.reload();
}
  editar(idArticulo) {
    localStorage.setItem('idArticulo', idArticulo);
    console.log('Id articulo ' + idArticulo);
    this.router.navigate(['/admin_editar_articulos']);


  }
  eliminar(id) {
    console.log("Articulo a eliminar "+id);
    this.articulosService.deleteArticulo(id).subscribe(res => {
      window.location.reload();
    }, (err) => {
      console.log(err);
    }
    );
    window.location.reload();
  }

  muestraArticulosTienda(id) {
    this.articulosService.getArticulosTienda(id).subscribe(
      res => {
        console.log(res);
        this.articulos = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  muestraArticulosCategoria(id) {


    this.articulosService.getArticulosCategoria(id).subscribe(
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
