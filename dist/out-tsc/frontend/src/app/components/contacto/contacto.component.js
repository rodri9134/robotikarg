import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ContactoComponent = class ContactoComponent {
    constructor(router, messageService, formBuilder) {
        this.router = router;
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.contactoForm = formBuilder.group({
            email: ['', [Validators.required]],
            titulo: ['', [Validators.required]],
            motivo: ['', [Validators.required]]
        });
    }
    ngOnInit() {
    }
    contacto(contacto) {
        this.messageService.sendMessage(contacto).subscribe(() => {
            // alert('Mensaje enviado correctamente');
            console.log('Mensaje enviado correctamente');
            this.router.navigate(['/']);
        });
    }
};
ContactoComponent = __decorate([
    Component({
        selector: 'app-contacto',
        templateUrl: './contacto.component.html',
        styleUrls: ['./contacto.component.scss']
    })
], ContactoComponent);
export { ContactoComponent };
//# sourceMappingURL=contacto.component.js.map