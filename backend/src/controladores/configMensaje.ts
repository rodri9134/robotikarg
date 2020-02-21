import { Request, Response } from 'express';

const nodemailer = require('nodemailer');

module.exports = (contactoForm: any) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rodri9134@gmail.com', // Cambialo por tu email
            pass: '25Ar49Ro(!' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: '<${formulario.email}>',
        to: 'rodri9134@gmail.com', // Cambia esta parte por el destinatario
        subject: contactoForm.asunto,
        html: `
 <strong>Email:</strong> ${contactoForm.email} <br/>
 <strong>Titulo:</strong> ${contactoForm.titulo} <br/>
 <strong>Motivo de la consulta:</strong> ${contactoForm.motivo}
 `
    };
    transporter.sendMail(mailOptions, function (err: any, info: any) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

