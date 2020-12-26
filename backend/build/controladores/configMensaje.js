"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ikargrobot@gmail.com',
            pass: 'MyO1}y|P}Be3drVi1k4s' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: '<${contactoForm.email}>',
        to: 'ikargrobot@gmail.com',
        subject: formulario.titulo,
        html: `
 <strong>Email:</strong> ${formulario.email} <br/>
 <strong>Titulo:</strong> ${formulario.titulo} <br/>
 <strong>Motivo de la consulta:</strong> ${formulario.motivo}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
};
