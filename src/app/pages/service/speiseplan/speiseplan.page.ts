import { Component, OnInit } from '@angular/core';
import { Infos, InfosService } from '../../../services/infos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-speiseplan',
  templateUrl: './speiseplan.page.html',
  styleUrls: ['./speiseplan.page.scss'],
})
export class SpeiseplanPage implements OnInit {

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
