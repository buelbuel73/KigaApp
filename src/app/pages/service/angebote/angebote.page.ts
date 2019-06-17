import { Component, OnInit } from '@angular/core';
import { Angebote, AngeboteService } from '../../../services/angebote.service';

@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.page.html',
  styleUrls: ['./angebote.page.scss'],
})
export class AngebotePage implements OnInit {

  items: Angebote[];

  constructor(public angeboteService: AngeboteService) { }

  ngOnInit() {
    this.angeboteService.getAngebote().subscribe(res => {
      this.items = res;
    });
  }

}
