import { Contacto } from "./app/modelo/contacto";

//Plantilla Html que se envia por correo
export function emailHTML(contacto: Contacto): string {
  return `<!DOCTYPE html>
    <html>
    <body>
    <div>
    <div style="width:auto; height: auto; position: relative; font-family: Arial; background-color: #EFEDEC; align-content: center">
    <table style="width: 100%; table-layout:fixed; ">
    <tr>
    
    <td colspan="5"><h1 style=" font-size:28px; color:#02802d; display: inline; ">CORREO PARA ROBOTIKARG DEL FORMULARIO CONTACTO</h1></td>
  </tr>
  </table>
    <div id="informacion"; style="background-color: white; height:auto; width: 900px; border: 1px solid grey; margin-left: 100px; margin-top: 20px; margin-bottom: 20px; padding-bottom: 20px; border-radius: 4px; text-align: left; ">
      <br><h2 style="color:grey; display: inline; justify-content: left; margin-left: 40px;">Usuario: ${contacto.FullName}. </h2> <br> 
      <br><p style="font-size:15px; color:#797978; display: inline; margin-left: 40px; padding-top: 90px;">Asunto: ${contacto.Comment}</p>
      <br><p style="font-size:15px; color:#797978; display: inline; margin-left: 40px; margin-top: 10px;"> Email: ${contacto.Email}</p>  <h3 style="color:black; display: inline; margin-top: 10px;">${usuarioSupervisor.password} </h3> 
    </div>
     
    </div>
    </div>
    </body>
    </html>`;
}