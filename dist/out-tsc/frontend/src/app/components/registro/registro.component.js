import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegistroComponent = class RegistroComponent {
    constructor(router, formBuilder, usuariosService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuariosService = usuariosService;
        this.valEmail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.valTelefono = '^[0-9]';
        this.registroForm = formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(this.valEmail)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
            telefono: ['', [Validators.required, Validators.minLength(9)]],
            idRol: ['1']
        });
    }
    ngOnInit() {
    }
    registro() {
        // Encriptar con bcript
        console.log(this.usuariosService);
        this.usuariosService.saveUsuario(this.registroForm.value).subscribe(res => {
            this.router.navigate(['/login']);
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    get email() {
        return this.registroForm.get('email');
    }
    get password() {
        return this.registroForm.get('password');
    }
    get telefono() {
        return this.registroForm.get('telefono');
    }
    get idRol() {
        return this.registroForm.get('idRol');
    }
};
RegistroComponent = __decorate([
    Component({
        selector: 'app-registro',
        templateUrl: './registro.component.html',
        styleUrls: ['./registro.component.scss']
    })
], RegistroComponent);
export { RegistroComponent };
//# sourceMappingURL=registro.component.js.map