import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public misusuarios: UsuariosService;

  mensaje: string;
  private patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder,  private usuariosService: UsuariosService) {


    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patronemail)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });

  }

  ngOnInit() {

  }
  login() {

    console.log(this.misusuarios);
    this.usuariosService.saveUsuario(this.loginForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {

    return this.loginForm.get('password');
  }

}



