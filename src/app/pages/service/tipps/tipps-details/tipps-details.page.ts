import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TippsService } from '../../../../services/tipps.service';

@Component({
  selector: 'app-tipps-details',
  templateUrl: './tipps-details.page.html',
  styleUrls: ['./tipps-details.page.scss'],
})
export class TippsDetailsPage implements OnInit {

  itemId = null;
  public items: Observable<any>;

  constructor( private faqsService: TippsService, public router: Router, public route: ActivatedRoute ) { }

  ngOnInit() {

    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
    }
    this.items = this.faqsService.getTipp(this.route.snapshot.paramMap.get('id'));

  }

}
