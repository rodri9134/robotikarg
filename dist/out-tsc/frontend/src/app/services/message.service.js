import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
    }
    sendMessage(contacto) {
        console.log('Contacto: ' + contacto);
        return this.http.post('http://localhost:3000/contacto/', contacto);
    }
};
MessageService = __decorate([
    Injectable()
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map