import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { EncrDecrService } from '../../services/encr-decr-service.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public usuario: Usuario;
  public misusuarios: UsuariosService;
  title = 'EncryptionDecryptionSample';

  plainText: string;
  encryptText: string;
  encPassword: string;
  decPassword: string;
  conversionEncryptOutput: string;
  conversionDecryptOutput: string;
  mensaje: string;
  private patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  // tslint:disable-next-line: max-line-length
  constructor(private EncrDecr: EncrDecrService, private router: Router, private formBuilder: FormBuilder, private usuariosService: UsuariosService) {


    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patronemail)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });

  }

  ngOnInit() {

  }
  guardarIdUsuario() {
    this.usuariosService.idUsuario(this.loginForm.value).subscribe(es => {
      console.log(es[0].id);
      localStorage.setItem('idUsuario', es[0].id);

    }
      ,
      err => {
        console.log(err);
      }
    );

  }
  login() {

    this.usuariosService.getLogin(this.loginForm.value).subscribe(
      res => {

        this.guardarIdUsuario();

        const tok = 'Robocliente' + res;
        localStorage.setItem('token', tok);
        const u: Usuario = { email: this.loginForm.value.email, password: this.loginForm.value.password };
        this.usuariosService.setUserLoggedIn(u);
        this.router.navigate(['/navCli']);
        console.log(res);
      },
      err => {
        console.log(err);
        this.router.navigate(['/login']);
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



