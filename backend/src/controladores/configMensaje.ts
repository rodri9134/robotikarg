import { Request, Response } from 'express';
import Mailer from './mailer';
import { Contacto } from '../../../frontend/src/app/modelo/contacto';
import { emailHTML } from '../../../frontend/src/contacto';


export async function sendMessage(
    req: Request,
    res: Response
  ): Promise<Response> {
const contacto:Contacto=req.body;
Mailer.sendMail('Formulario contacto Robotikarg', emailHTML(contacto), 'ikargrobot@gmail.com');

if (Mailer === undefined) {
  throw new Error(
    '¡Vaya! Parece que tengo problemas para enviar el email de contacto'
  );
}
return res.status(200).json({
    success: true,
    message: `El correo ha sido mandado`
  });
  }
// const nodemailer = require('nodemailer');

// module.exports = (formulario: any) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//               user: 'ikargrobot@gmail.com', // Cambialo por tu email
//             pass: 'MyO1}y|P}Be3drVi1k4s' // Cambialo por tu password
//         }
//     });

//     const mailOptions = {
//         from: '<${contactoForm.email}>',
//         to: 'ikargrobot@gmail.com', // Cambia esta parte por el destinatario
//         subject: formulario.titulo,
        
//         html: `
//  <strong>Email:</strong> ${formulario.email} <br/>
//  <strong>Titulo:</strong> ${formulario.titulo} <br/>
//  <strong>Motivo de la consulta:</strong> ${formulario.motivo}
//  `
//     };
//     transporter.sendMail(mailOptions, function (err: any, info: any) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(info);
//         }
//     });
// };

