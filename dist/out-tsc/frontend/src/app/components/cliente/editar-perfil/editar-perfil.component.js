import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
let EditarPerfilComponent = class EditarPerfilComponent {
    constructor(router, formBuilder, usuariosService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuariosService = usuariosService;
        this.patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.actualizarPerfilForm = formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(this.patronemail)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
            foto: ['', [Validators.required]],
            telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]]
        });
    }
    ngOnInit() {
    }
    actualizarUsuario() {
        // console.log(this.actualizarPerfilForm.value);
        const idUsuario = localStorage.getItem('idUsuario');
        this.usuariosService.updateUsuario(idUsuario, this.actualizarPerfilForm.value).pipe(first()).subscribe(data => {
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
    get email() {
        return this.actualizarPerfilForm.get('email');
    }
    get password() {
        return this.actualizarPerfilForm.get('password');
    }
    get telefono() {
        return this.actualizarPerfilForm.get('telefono');
    }
    get foto() {
        return this.actualizarPerfilForm.get('foto');
    }
};
EditarPerfilComponent = __decorate([
    Component({
        selector: 'app-editar-perfil',
        templateUrl: './editar-perfil.component.html',
        styleUrls: ['./editar-perfil.component.scss']
    })
], EditarPerfilComponent);
export { EditarPerfilComponent };
//# sourceMappingURL=editar-perfil.component.js.map