import { Component, OnInit } from '@angular/core';
import { News, NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items: News[];

  constructor( public newsService: NewsService ) {}

  ngOnInit() {

    this.newsService.getNews().subscribe(res => {
      this.items = res;
    });

  }

}
