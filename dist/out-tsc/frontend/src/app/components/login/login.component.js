import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    // tslint:disable-next-line: max-line-length
    constructor(EncrDecr, router, formBuilder, usuariosService) {
        this.EncrDecr = EncrDecr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuariosService = usuariosService;
        this.title = 'EncryptionDecryptionSample';
        this.patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.loginForm = formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(this.patronemail)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
        });
    }
    ngOnInit() {
    }
    guardarIdUsuario() {
        this.usuariosService.idUsuario(this.loginForm.value).subscribe(es => {
            console.log(es[0].id);
            localStorage.setItem('idUsuario', es[0].id);
        }, err => {
            console.log(err);
        });
    }
    login() {
        this.usuariosService.getLogin(this.loginForm.value).subscribe(res => {
            this.guardarIdUsuario();
            const tok = 'Robocliente' + res;
            localStorage.setItem('token', tok);
            const u = { email: this.loginForm.value.email, password: this.loginForm.value.password };
            this.usuariosService.setUserLoggedIn(u);
            this.router.navigate(['/navCli']);
            console.log(res);
        }, err => {
            console.log(err);
            this.router.navigate(['/login']);
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map