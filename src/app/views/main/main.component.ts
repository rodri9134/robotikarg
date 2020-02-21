import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  datosUsuario: any;
  constructor(private service: LoginService) { }

  ngOnInit() {
    const values = JSON.parse(localStorage.getItem('datosUsuario'));
    this.datosUsuario = this.service.getDatosForm() || values;

  }

}
