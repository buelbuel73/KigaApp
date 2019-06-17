import { Component, OnInit } from '@angular/core';
import { Faqs, FaqsService } from '../../../services/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  items: Faqs[];

  constructor( public faqsService: FaqsService ) { }

  ngOnInit() {

    this.faqsService.getFaqs().subscribe(res => {
      this.items = res;
    });
  }

}
