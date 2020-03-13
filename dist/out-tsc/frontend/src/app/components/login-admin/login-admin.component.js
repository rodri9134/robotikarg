import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginAdminComponent = class LoginAdminComponent {
    constructor(EncrDecr, router, formBuilder, usuariosService) {
        this.EncrDecr = EncrDecr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuariosService = usuariosService;
        this.patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.loginAdminForm = formBuilder.group({
            emailAdmin: ['', [Validators.required, Validators.pattern(this.patronemail)]],
            passwordAdmin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
        });
    }
    ngOnInit() {
    }
    loginAdmin() {
        this.usuariosService.getLoginAdmin(this.loginAdminForm.value).subscribe(res => {
            const tok = 'Roboadmin' + res;
            localStorage.setItem('tokenAdmin', tok);
            this.router.navigate(['/navAdmin']);
            console.log(res);
        }, err => {
            console.log(err);
            this.router.navigate(['/login']);
        });
    }
};
LoginAdminComponent = __decorate([
    Component({
        selector: 'app-login-admin',
        templateUrl: './login-admin.component.html',
        styleUrls: ['./login-admin.component.scss']
    })
], LoginAdminComponent);
export { LoginAdminComponent };
//# sourceMappingURL=login-admin.component.js.map