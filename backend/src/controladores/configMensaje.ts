import { Request, Response } from 'express';

const nodemailer = require('nodemailer');

module.exports = (formulario: any) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rodri9134@gmail.com', // Cambialo por tu email
            pass: '25Ar49Ro(!' // Cambialo por tu password
        },
     tls: {
        rejectUnauthorized:false,
    }}
    );
    console.log(formulario.titulo);
    const mailOptions = {
        from: '<${contactoForm.email}>',
        to: 'rodri9134@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.titulo,
        
        html: `
 <strong>Email:</strong> ${formulario.email} <br/>
 <strong>Titulo:</strong> ${formulario.titulo} <br/>
 <strong>Motivo de la consulta:</strong> ${formulario.motivo}
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

