import { Request, Response } from 'express';

const nodemailer = require('nodemailer');

module.exports = (contactoForm: any) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
              user: 'ikargrobot@gmail.com', // Cambialo por tu email
            pass: 'MyO1}y|P}Be3drVi1k4s' // Cambialo por tu password
        }
    });
    console.log(contactoForm.titulo);
    const mailOptions = {
        from: '<${contactoForm.email}>',
        to: 'ikargrobot@gmail.com', // Cambia esta parte por el destinatario
        subject: contactoForm.titulo,
        
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

