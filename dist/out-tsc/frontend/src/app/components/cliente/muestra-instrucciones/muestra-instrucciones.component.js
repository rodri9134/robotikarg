import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
        const idUsuario = localStorage.getItem('idUsuario');
        this.instruccionesService.guardarInstruccionUsuario(idInstruccion, idUsuario).subscribe(data => {
            if (data.status === 200) {
                console.log('Perfil actualizado correctamente.');
                this.router.navigate(['/navCli']);
            }
            else {
                alert(data.message);
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