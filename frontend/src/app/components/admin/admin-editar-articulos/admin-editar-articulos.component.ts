import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/modelo/articulos';
import { ArticulosService } from 'src/app/services/articulos.service';
import { TiendasService } from 'src/app/services/tiendas.service';
import { CategoriasService } from 'src/app/services/categorias.service';
@Component({
  selector: 'app-admin-editar-articulos',
  templateUrl: './admin-editar-articulos.component.html',
  styleUrls: ['./admin-editar-articulos.component.scss']
})
export class AdminEditarArticulosComponent implements OnInit {
  public editarArticuloForm: FormGroup;
  public articulos: Articulo;
  public categorias: CategoriasService;
  public tiendas: TiendasService;
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private tiendasService: TiendasService, private categoriasService: CategoriasService, private articulosService: ArticulosService) {
    this.editarArticuloForm = formBuilder.group({
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
    const idArticulo = localStorage.getItem('idArticulo');
    this.articulosService.getArticulo(idArticulo).subscribe(
      res => {
        console.log('Articulos: ' + res);
        this.articulos = res;
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

  }

  editarArticulo() {
    const idArticulo = localStorage.getItem('idArticulo');
    this.articulosService.updateArticulo(idArticulo, this.editarArticuloForm.value).subscribe(
      res => {
        console.log('Articulo actualizado correctamente');
        this.articulos = res;
        localStorage.removeItem('idArticulo');
        this.router.navigate(['/admin_articulos']);
      }
      ,
      err => {
        console.log(err);
      }
    );

  }
  // titulo,descripcion,referencia,precio,imagen
  get id() {
    return this.editarArticuloForm.get('id');
  }
  get titulo() {

    return this.editarArticuloForm.get('titulo');
  }
  get descripcion() {
    return this.editarArticuloForm.get('descripcion');
  }
  get referencia() {
    return this.editarArticuloForm.get('referencia');
  }
  get precio() {
    return this.editarArticuloForm.get('precio');
  }
  get imagen() {
    return this.editarArticuloForm.get('imagen');
  }
  get idCategoria() {
    return this.editarArticuloForm.get('idCategoria');
  }
  get idTienda() {
    return this.editarArticuloForm.get('idTienda');
  }
}
