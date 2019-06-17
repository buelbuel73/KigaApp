import { Component, OnInit } from '@angular/core';
import { Infos, InfosService } from '../../../services/infos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-einrichtung',
  templateUrl: './einrichtung.page.html',
  styleUrls: ['./einrichtung.page.scss'],
})
export class EinrichtungPage implements OnInit {


  items: Infos[];

  constructor( public infosService: InfosService, public iab: InAppBrowser ) { }

  ngOnInit() {

    this.infosService.getInfos().subscribe(res => {
      this.items = res;
    });

  }

  viewFile(url) {
    this.iab.create(url, '_system', 'location=yes');
  }

}
