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
  private patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private EncrDecr: EncrDecrService, private router: Router, private formBuilder: FormBuilder, private usuariosService: UsuariosService) {
    this.loginAdminForm = formBuilder.group({
      emailAdmin: ['', [Validators.required, Validators.pattern(this.patronemail)]],
      passwordAdmin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

    });
  }

  ngOnInit() {
  }
  loginAdmin() {

    this.usuariosService.getLoginAdmin(this.loginAdminForm.value).subscribe(
      res => {
        const tok = 'Roboadmin' + res;
        localStorage.setItem('tokenAdmin', tok);
        this.router.navigate(['/navAdmin']);
        console.log(res);
      },
      err => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    );
  }
}
