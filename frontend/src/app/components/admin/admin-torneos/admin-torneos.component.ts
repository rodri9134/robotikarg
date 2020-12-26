import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/modelo/torneos';
import { Provincia } from 'src/app/modelo/provincias';
import { RangoEdad } from 'src/app/modelo/rangoEdad';
import { Router, NavigationEnd } from '@angular/router';
import { TorneosService } from 'src/app/services/torneos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { RangoEdadService } from 'src/app/services/rango-edad.service';


@Component({
  selector: 'app-admin-torneos',
  templateUrl: './admin-torneos.component.html',
  styleUrls: ['./admin-torneos.component.scss']
})
export class AdminTorneosComponent implements OnInit {

  private torneos: Torneo;
  private provincias: Provincia;
  private rangoEdades: RangoEdad;
  // tslint:disable-next-line: max-line-length
  constructor(private torneosService: TorneosService, private router: Router, private provinciasService: ProvinciasService, private rangoEdadService: RangoEdadService) { }

  ngOnInit() {
    this.torneosService.getTorneos().subscribe(
      res => {

        console.log(res);
        this.torneos = res;
      },
      err => {
        console.log(err);
      }
    );
    this.rangoEdadService.getRangoEdades().subscribe(
      res => {

        console.log(res);
        this.rangoEdades = res;
      },
      err => {
        console.log(err);
      }
    );

    this.provinciasService.getProvincias().subscribe(
      res => {

        console.log(res);
        this.provincias = res;
      },
      err => {
        console.log(err);
      }
    );

  }
  refresh(): void {
    window.location.reload();
}
  editar(idTorneo) {

    localStorage.setItem('idTorneo', idTorneo);
    console.log('Id torneo ' + idTorneo);
    this.router.navigate(['/admin_editar_torneos']);
  }
  eliminar(id) {
    this.torneosService.deleteTorneo(id).subscribe(res => {
      window.location.reload();
    }, (err) => {
      console.log(err);
      
    }
    );
    window.location.reload();
  }
  muestraTorneosProvincias(id) {
    this.torneosService.getTorneosProvincia(id).subscribe(
      res => {
        console.log(res);
        this.torneos = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  muestraTorneosEdades(id) {


    this.torneosService.getTorneosEdad(id).subscribe(
      res => {
        console.log(res);
        this.torneos = res;
      },
      err => {
        console.log(err);
      }
    );
  }


}

