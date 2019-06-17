import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FaqsService } from '../../../../services/faqs.service';

@Component({
  selector: 'app-faqs-details',
  templateUrl: './faqs-details.page.html',
  styleUrls: ['./faqs-details.page.scss'],
})
export class FaqsDetailsPage implements OnInit {

  itemId = null;
  public items: Observable<any>;

  constructor( private faqsService: FaqsService, public router: Router, public route: ActivatedRoute ) { }

  ngOnInit() {

    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
    }
    this.items = this.faqsService.getFaq(this.route.snapshot.paramMap.get('id'));

  }

}
