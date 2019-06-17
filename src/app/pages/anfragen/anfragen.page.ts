import { Component, OnInit } from '@angular/core';
import { Anfragen, AnfrageService } from '../../services/anfrage.service';

@Component({
  selector: 'app-anfragen',
  templateUrl: './anfragen.page.html',
  styleUrls: ['./anfragen.page.scss'],
})
export class AnfragenPage implements OnInit {

  itemsA: Anfragen[];
  itemsB: Anfragen[];
  itemsC: Anfragen[];

  constructor( public anfrageService: AnfrageService ) { }

  ngOnInit() {

    this.anfrageService.getAnfragsA ().subscribe(res => {
      this.itemsA = res;
    });

    this.anfrageService.getAnfragsB().subscribe(res => {
      this.itemsB = res;
    });

    this.anfrageService.getAnfragsC().subscribe(res => {
      this.itemsC = res;
    });

  }

}
