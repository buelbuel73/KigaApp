import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Krankm, MedkitService } from '../../services/medkit.service';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medkit',
  templateUrl: './medkit.page.html',
  styleUrls: ['./medkit.page.scss'],
})
export class MedkitPage implements OnInit {

  items: Krankm[];
  currentTime: Date;
  public isTeam = false;
  public kindList: Observable<any>;
  private _kindName: string;
  public get kindName(): string {
    return this._kindName;
  }
  public set kindName(value: string) {
    this._kindName = value;
  }

  constructor(
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private medkitService: MedkitService,
    private router: Router,
    private authService: AuthService
  ) {
    this.currentTime = new Date();
  }

  ngOnInit() {

    this.medkitService.getKrankms().subscribe(res => {
      this.items = res;
    });

    this.authService.isTeam().then(teamStatus => {
      this.isTeam = teamStatus;
    });

    this.kindList = this.medkitService.getKindList().valueChanges();

  }

  krankTag(kind: string): Promise<any> {
    return this.firestore.doc(`/medkit/${this.currentTime}/`).set({
      zeit: this.currentTime.toLocaleString(),
      time: this.currentTime,
      authID: this.authService.userId,
      dauer: '1 Tag',
      kind,
      // Other info you want to add here
    })
    .then(async () => {
      const alert = await this.alertCtrl.create({
        message: 'Ihre Krankmeldung - 1 Tag - wurde übermittelt.',
        buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      alert.present();
    });
  }


  krankWoche(kind: string): Promise<any> {
    return this.firestore.doc(`/medkit/${this.currentTime}/`).set({
      zeit: this.currentTime.toLocaleString(),
      time: this.currentTime,
      authID: this.authService.userId,
      dauer: '1 Woche',
      kind,
      // Other info you want to add here
    })
    .then(async () => {
      const alert = await this.alertCtrl.create({
        message: 'Ihre Krankmeldung - 1 Woche - wurde übermittelt.',
        buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      alert.present();
    });
  }

  async moreKindOptions(kind): Promise<void> {
    const action = await this.actionSheetCtrl.create({
      header: 'Kind krank melden',
      buttons: [
        {
          text: 'Tag krank melden !',
          role: 'destructive',
          icon: 'medkit',
          handler: () => {
            this.krankTag(kind);
          },
        },
        {
          text: 'Woche krank melden !',
          role: 'destructive',
          icon: 'medkit',
          handler: () => {
            this.krankWoche(kind);
          },
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
          icon: 'close',
          handler: () => {
          },
        },
      ],
    });
    action.present();
  }
}
