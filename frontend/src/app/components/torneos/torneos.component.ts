import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/modelo/torneos';
import { TorneosService } from 'src/app/services/torneos.service';
@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.scss']
})
export class TorneosComponent implements OnInit {
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
