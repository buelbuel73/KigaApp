import { Component, OnInit } from '@angular/core';
import { Tipps, TippsService } from '../../../services/tipps.service';

@Component({
  selector: 'app-tipps',
  templateUrl: './tipps.page.html',
  styleUrls: ['./tipps.page.scss'],
})
export class TippsPage implements OnInit {

  items: Tipps[];

  constructor( public tippsService: TippsService ) { }

  ngOnInit() {

    this.tippsService.getTipps().subscribe(res => {
      this.items = res;
    });

  }

}
