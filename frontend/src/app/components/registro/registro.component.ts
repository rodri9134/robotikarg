import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public registroForm: FormGroup;
  private valEmail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  private valTelefono = '^[0-9]';

  mensaje: string;

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService) {

    this.registroForm = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern(this.valEmail)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      idRol: ['1']
    });
  }

  ngOnInit() {

  }
  registro() {


    console.log(this.usuariosService);
    this.usuariosService.saveUsuario(this.registroForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }
  get email() {
    return this.registroForm.get('email');
  }
  get password() {

    return this.registroForm.get('password');
  }
  get telefono() {
    return this.registroForm.get('telefono');
  }
  get idRol() {
    return this.registroForm.get('idRol');
  }
}
