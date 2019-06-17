import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);





@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})



export class CalendarPage implements OnInit {

  eventSource: Observable<any>;
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    locale: 'de-DE',
    noEventsLabel: 'keine Termine',
    color: 'primary',
    mode: 'month',
    currentDate: new Date()
  };



  constructor( private firestore: AngularFirestore, public alertCtrl: AlertController ) {

  }

  onViewTitleChanged(title: string) {
    this.viewTitle = title;
  }

  async onEventSelected(event) {

    moment.locale('de');

    const start = moment(event.startTime).format('LLLL');
    const end = moment(event.endTime).format('LLLL');


      const alert = await this.alertCtrl.create({
        header: '' + event.title,
      subHeader: 'von: ' + start + ' bis: ' + end,
      buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }


  ngOnInit() {

    this.eventSource = this.firestore.collection('termine').valueChanges();



        this.eventSource.forEach(events => {

          for (const event of events) {
            event.startTime = new Date(event.startTime);
            event.endTime = new Date(event.endTime);
        }
           events.push();
           this.eventSource = events;
           console.log(events);
        });

  }

  onChange($event: any) {
    console.log($event);
  }

}
