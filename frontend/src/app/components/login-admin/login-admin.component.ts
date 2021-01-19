import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { EncrDecrService } from '../../services/encr-decr-service.service';
import { Usuario } from '../../modelo/usuario';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  public loginAdminForm: FormGroup;
  public usuario: Usuario;

  mensaje: string;
  private patronEmail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  // tslint:disable-next-line: max-line-length
  constructor(private EncrDecr: EncrDecrService, private router: Router, private formBuilder: FormBuilder, private usuariosService: UsuariosService) {
    this.loginAdminForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patronEmail)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });
  }

  ngOnInit() {
  }
  loginAdmin() {
    console.log(this.loginAdminForm.value);
    this.usuariosService.getLoginAdmin(this.loginAdminForm.value).subscribe(
      res => {

        if (res.message == "Correo incorrecto" || res.message == "Contraseña incorrecta del admin") {
          this.router.navigate(['/login']);
          alert("Login incorrecto");
        }
        else{
        const tok = 'Roboadmin' + res;
        localStorage.setItem('tokenAdmin', tok);
        const u: Usuario = { email: this.loginAdminForm.value.email, password: this.loginAdminForm.value.password };
        this.usuariosService.setAdminLoggedIn(u);
        this.router.navigate(['/navAdmin']);
        console.log(res);
        }
      },
      err => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    );
  }
  get email() {
    return this.loginAdminForm.get('email');
  }
  get password() {

    return this.loginAdminForm.get('password');
  }
}
