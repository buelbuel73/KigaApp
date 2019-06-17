import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PreiseService } from '../../../../services/preise.service';

@Component({
  selector: 'app-preise-details',
  templateUrl: './preise-details.page.html',
  styleUrls: ['./preise-details.page.scss'],
})
export class PreiseDetailsPage implements OnInit {

  itemId = null;
  public items: Observable<any>;

  constructor( private preiseService: PreiseService, public router: Router, public route: ActivatedRoute ) { }

  ngOnInit() {

    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
    }
    this.items = this.preiseService.getPreis(this.route.snapshot.paramMap.get('id'));

  }

}
