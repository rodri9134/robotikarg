import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
let MuestraInstruccionesComponent = class MuestraInstruccionesComponent {
    // tslint:disable-next-line: max-line-length
    constructor(lenguajesService, router, instruccionesService, instruccionesUsuarioService) {
        this.lenguajesService = lenguajesService;
        this.router = router;
        this.instruccionesService = instruccionesService;
        this.instruccionesUsuarioService = instruccionesUsuarioService;
    }
    ngOnInit() {
        this.lenguajesService.getLenguajes().subscribe(res => {
            console.log(res);
            this.lenguajes = res;
        }, err => {
            console.log(err);
        });
        this.instruccionesService.getInstrucciones().subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
    muestraInstrucciones(id) {
        this.instruccionesService.getInstruccionesLenguaje(id).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
    megusta(idInstruccion) {
        console.log('Id Instruccion: ', idInstruccion);
        const idUsuario = parseInt(localStorage.getItem('idUsuario'));
        const instruccionesUsuario = { idInstruccion: idInstruccion, idUsuario: idUsuario };
        this.instruccionesUsuarioService.saveInstruccionUsuario(instruccionesUsuario).pipe(first()).subscribe(data => {
            if (data.status === 200) {
                alert("La instrucción que quieres guardar ya la tienes");
            }
            else {
                alert(data.message);
                this.router.navigate(['/misInstrucciones']);
            }
        }, error => {
            alert(error);
        });
    }
};
MuestraInstruccionesComponent = __decorate([
    Component({
        selector: 'app-muestra-instrucciones',
        templateUrl: './muestra-instrucciones.component.html',
        styleUrls: ['./muestra-instrucciones.component.scss']
    })
], MuestraInstruccionesComponent);
export { MuestraInstruccionesComponent };
//# sourceMappingURL=muestra-instrucciones.component.js.map