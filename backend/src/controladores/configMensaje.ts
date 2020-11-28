import { Request, Response } from 'express';

const nodemailer = require('nodemailer');

module.exports = (formulario: any) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
<<<<<<< HEAD
            user: 'ikargrobot@gmail.com', // Cambialo por tu email
            pass: 'MyO1}y|P}Be3drVi1k4s' // Cambialo por tu password
        },
     tls: {
        rejectUnauthorized:false,
    }}
    );
    console.log(formulario.titulo);
    const mailOptions = {
        from: '<${contactoForm.email}>',
        to: 'ikargrobot@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.titulo,
=======
              user: 'ikargrobot@gmail.com', // Cambialo por tu email
            pass: 'MyO1}y|P}Be3drVi1k4s' // Cambialo por tu password
        }
    });
    console.log(contactoForm.titulo);
    const mailOptions = {
        from: '<${contactoForm.email}>',
        to: 'ikargrobot@gmail.com', // Cambia esta parte por el destinatario
        subject: contactoForm.titulo,
>>>>>>> 34a58327a94839f5bc19eb6bf6d560b4d1f90587
        
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

