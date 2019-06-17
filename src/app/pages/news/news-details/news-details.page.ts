import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  itemId = null;
  public items: Observable<any>;

  constructor( private newsService: NewsService, public router: Router, public route: ActivatedRoute ) {}

  ngOnInit() {

    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
    }
    this.items = this.newsService.getNew(this.route.snapshot.paramMap.get('id'));

  }

}
