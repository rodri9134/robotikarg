import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';
import { literal } from 'src/app/core/services/18n/es-ES';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder,
              private serviceLogin: LoginService
    ,         private route: Router) { }
  loginForm: FormGroup;
  loading = false;
  mensaje: string;
  ngOnInit() {

    const object = {
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    };
    this.loginForm = this.formBuilder.group(object);
  }
  enviarFormulario() {
    if (this.loginForm.invalid) {
      this.loginForm.setErrors({ login: literal.errors.emptyForm });
      this.loginForm.reset(); // Resetear formulario como si fuera nuevo
      return;
    }
    this.loading = true;

    setTimeout(() => {
      this.serviceLogin.checkLogin().subscribe(data => {
        this.serviceLogin.setDatosForm(data);
        localStorage.setItem('datosUsuario', JSON.stringify(data));
        if (data.user === this.loginForm.get('user').value && data.pass === +this.loginForm.get('pass').value) {
          this.route.navigateByUrl('/main');
        } else {
          this.loginForm.setErrors({ login: literal.errors.login });
        }
        this.loading = false;
      });
    }, 1000);
  }

}
