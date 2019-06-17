import { Component, OnInit } from '@angular/core';
import { Preise, PreiseService } from '../../../services/preise.service';

@Component({
  selector: 'app-preise',
  templateUrl: './preise.page.html',
  styleUrls: ['./preise.page.scss'],
})
export class PreisePage implements OnInit {

  items: Preise[];

  constructor( public preiseService: PreiseService ) { }

  ngOnInit() {

    this.preiseService.getPreise().subscribe(res => {
      this.items = res;
    });

  }

}
