import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/app/modelo/instrucciones';
import { InstruccionesService } from 'src/app/services/instrucciones.service';
import { InstruccionesUsuarioService } from 'src/app/services/instrucciones-usuario.service';
import { Usuario } from 'src/app/modelo/usuario';
import { Router, NavigationEnd } from '@angular/router';
import { InstruccionUsuario } from 'src/app/modelo/instruccionesUsuario';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { Lenguaje } from 'src/app/modelo/lenguajes';
@Component({
  selector: 'app-admin-instrucciones',
  templateUrl: './admin-instrucciones.component.html',
  styleUrls: ['./admin-instrucciones.component.scss']
})
export class AdminInstruccionesComponent implements OnInit {
  private instrucciones: Instruccion;
  private lenguajes: LenguajesService;
  private instruccionUsuario: InstruccionUsuario;
  miinstruccion: any;
  // tslint:disable-next-line: max-line-length
  constructor(private lenguajesService: LenguajesService, private router: Router, private instruccionesService: InstruccionesService, private instruccionesUsuarioService: InstruccionesUsuarioService) {
    
this.router.routeReuseStrategy.shouldReuseRoute = function () {
  return false;
};
this.miinstruccion = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    // Trick the Router into believing it's last link wasn't previously loaded
    this.router.navigated = false;
  }
});


  }
  ngOnDestroy() {
    if (this.miinstruccion) {
      this.miinstruccion.unsubscribe();
    }
     }
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

  editar(idInstruccion) {
    localStorage.setItem('idInstruccion', idInstruccion);
    this.router.navigate(['/admin_editar_instrucciones']);


  }
  eliminar(idInstruccion) {
    this.instruccionesService.deleteInstruccion(idInstruccion).subscribe(
      res => {
        console.log(res);
        // tslint:disable-next-line: no-unused-expression
        this.miinstruccion;
        this.router.navigate(['/navAdmin']);
        this.ngOnDestroy();
/*
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin_instrucciones']);
*/
      },
      err => {
        console.log(err);
      }
    );

  }


}
