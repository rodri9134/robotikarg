import { Component, OnInit } from '@angular/core';
import { UsuariosService} from '../../services/usuarios.service';
@Component({
  selector: 'app-navinv',
  templateUrl: './navinv.component.html',
  styleUrls: ['./navinv.component.scss']
})
export class NavinvComponent implements OnInit {

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit() {
  }

}
