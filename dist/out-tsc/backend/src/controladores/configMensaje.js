const nodemailer = require('nodemailer');
module.exports = (contactoForm) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rodri9134@gmail.com',
            pass: '25Ar49Ro(!' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: '<${formulario.email}>',
        to: 'rodri9134@gmail.com',
        subject: contactoForm.asunto,
        html: `
 <strong>Email:</strong> ${contactoForm.email} <br/>
 <strong>Titulo:</strong> ${contactoForm.titulo} <br/>
 <strong>Motivo de la consulta:</strong> ${contactoForm.motivo}
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
//# sourceMappingURL=configMensaje.js.map