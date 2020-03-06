import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
let EncrDecrService = class EncrDecrService {
    constructor() { }
    // The set method is use for encrypt the value.
    set(keys, value) {
        const key = CryptoJS.enc.Utf8.parse(keys);
        const iv = CryptoJS.enc.Utf8.parse(keys);
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    // The get method is use for decrypt the value.
    get(keys, value) {
        const key = CryptoJS.enc.Utf8.parse(keys);
        const iv = CryptoJS.enc.Utf8.parse(keys);
        const decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
};
EncrDecrService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EncrDecrService);
export { EncrDecrService };
//# sourceMappingURL=encr-decr-service.service.js.map