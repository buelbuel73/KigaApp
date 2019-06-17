import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../services/auth.service';
import { AnfrageService } from '../../../services/anfrage.service';
import { MedkitService } from '../../../services/medkit.service';
import { AlertController } from '@ionic/angular';
export interface AnfrageM {
  authID: string;
  title: string;
  antwort: string;
  kind: string;
  zeit: string;
}

@Component({
  selector: 'app-anfrage-details-b',
  templateUrl: './anfrage-details-b.page.html',
  styleUrls: ['./anfrage-details-b.page.scss'],
})
export class AnfrageDetailsBPage implements OnInit {

  anfragem = {} as AnfrageM;
  antwortm: string;
  itemBId = null;
  public itemsB: Observable<any>;

  public kindList: Observable<any>;
  private _kindName: string;
  currentTime: Date;
  public get kindName(): string {
    return this._kindName;
  }
  public set kindName(value: string) {
    this._kindName = value;
  }

  constructor(
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private medkitService: MedkitService,
    private anfrageService: AnfrageService,
    public router: Router,
    public route: ActivatedRoute
    ) {
      this.currentTime = new Date();
    }

  ngOnInit() {

    this.itemBId = this.route.snapshot.params['id'];
    if (this.itemBId)  {

    }
    this.itemsB = this.anfrageService.getAnfragB(this.route.snapshot.paramMap.get('id'));

    this.kindList = this.medkitService.getKindList().valueChanges();


  }

  async antwort(kind: string): Promise<any> {
    await this.firestore.doc(`/antworten/${this.itemBId}/`).set({
      zeit: this.currentTime.toLocaleString(),
      authID: this.authService.userId,
      antwort: this.anfragem.antwort,
      title: this.itemBId,
      kind,
    });
    const alert = await this.alertCtrl.create({
      message: 'Ihre Antwort wurde übermittelt.',
      buttons: [{ text: 'Ok', role: 'cancel' }],
    });
    alert.present();
  }

}
