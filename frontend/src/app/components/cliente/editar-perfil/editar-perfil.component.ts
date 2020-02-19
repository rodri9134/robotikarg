import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  public actualizarPerfilForm: FormGroup;
  public usuarios: UsuariosService;
  constructor(private router: Router, private formBuilder: FormBuilder, private usuariosService: UsuariosService) {

    this.actualizarPerfilForm = formBuilder.group({
      email: [''],
      password: [''],
      foto: ['']
    });
   }

  ngOnInit() {
  }
actualizarUsuario() {



}
}
