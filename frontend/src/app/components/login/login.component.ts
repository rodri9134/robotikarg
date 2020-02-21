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
  login() {

    this.usuariosService.getLogin(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res);
        let u: Usuario = { email: this.loginForm.value.email, password:this.loginForm.value.password };
        this.usuariosService.setUserLoggedIn(u);
        this.router.navigate(['/navCli']);
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



