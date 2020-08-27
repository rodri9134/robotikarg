import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/modelo/articulos';
import { ArticulosService } from 'src/app/services/articulos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-admin-insertar-articulos',
  templateUrl: './admin-insertar-articulos.component.html',
  styleUrls: ['./admin-insertar-articulos.component.scss']
})
export class AdminInsertarArticulosComponent implements OnInit {
  public insertarArticuloForm: FormGroup;
  public articulos: ArticulosService;
  public categorias: CategoriasService;
  public tiendas: TiendasService;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private articulosService: ArticulosService, private categoriasService: CategoriasService, private tiendasService: TiendasService) {
    this.insertarArticuloForm = formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      idCategoria: [''],
      idTienda: [''],

    });

   }

   ngOnInit() {
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

insertarArticulo() {
  this.articulosService.saveArticulo(this.insertarArticuloForm.value).subscribe(
    res => {
      console.log(res);
      this.articulos = res;
      this.router.navigate(['/admin_articulos']);
    }
    ,
    err => {
      console.log(err);
    }
  );

}
// titulo,descripcion,referencia,precio,imagen,idCategoria,idTienda
  get id() {
    return this.insertarArticuloForm.get('id');
  }
  get titulo() {
    return this.insertarArticuloForm.get('titulo');
  }
  get descripcion() {
    return this.insertarArticuloForm.get('descripcion');
  }
  get referencia() {
    return this.insertarArticuloForm.get('referencia');
  }
  get precio() {
    return this.insertarArticuloForm.get('precio');
  }
  get imagen() {
    return this.insertarArticuloForm.get('imagen');
  }
  get idCategoria() {
    return this.insertarArticuloForm.get('idCategoria');
  }
  get idTienda() {
    return this.insertarArticuloForm.get('idTienda');
  }
}

