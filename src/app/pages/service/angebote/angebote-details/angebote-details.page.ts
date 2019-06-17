import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngeboteService } from '../../../../services/angebote.service';

@Component({
  selector: 'app-angebote-details',
  templateUrl: './angebote-details.page.html',
  styleUrls: ['./angebote-details.page.scss'],
})
export class AngeboteDetailsPage implements OnInit {

  itemId = null;
  public items: Observable<any>;

constructor( private angeboteService: AngeboteService, public router: Router, public route: ActivatedRoute ) {

}

  ngOnInit() {
    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
    }
    this.items = this.angeboteService.getAngebot(this.route.snapshot.paramMap.get('id'));

  }

}
