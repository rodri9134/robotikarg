import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/modelo/torneos';
import { TorneosService } from 'src/app/services/torneos.service';

@Component({
  selector: 'app-admin-torneos',
  templateUrl: './admin-torneos.component.html',
  styleUrls: ['./admin-torneos.component.scss']
})
export class AdminTorneosComponent implements OnInit {

  private torneos: Torneo;
  constructor(private torneosService: TorneosService) { }

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
  }

}

