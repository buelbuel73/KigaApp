import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

export interface Like {
  time: string;
  like: string;
  authID: string;
  cat: string;
}

export interface Neutral {
  time: string;
  neutral: string;
  authID: string;
  cat: string;
}

export interface Unlike {
  time: string;
  unlike: string;
  authID: string;
  cat: string;
}

export interface Feedback {
  time: string;
  feedback: string;
  authID: string;
  cat: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  currentTime: Date;

  likes: Observable<any[]>;
  neutrals: Observable<any[]>;
  unlikes: Observable<any[]>;
  feedbacks: Observable<any[]>;

  like = {} as Like;
  neutral = {} as Neutral;
  unlike = {} as Unlike;
  feedback = {} as Feedback;

  constructor(
    public router: Router,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public firestore: AngularFirestore ) {

    this.likes = firestore.collection<Like>('feedback', ref => ref.where('cat', '==', 'like')).valueChanges();
    this.neutrals = firestore.collection<Neutral>('feedback', ref => ref.where('cat', '==', 'neutral')).valueChanges();
    this.unlikes = firestore.collection<Unlike>('feedback', ref => ref.where('cat', '==', 'unlike')).valueChanges();
    this.feedbacks = firestore.collection<Feedback>('feedback', ref => ref.where('cat', '==', 'feedback')).valueChanges();
    this.currentTime = new Date();
   }

  ngOnInit() {
  }

  async alert(messsage: string) {
    const alert = await
    this.alertCtrl.create({
      header: 'Info!',
      subHeader: messsage,
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl('/app/tabs/feedback');
  }

  cllike() {
    this.firestore.doc(`/feedback/${this.currentTime}/`).set({
      cat: 'like',
      zeit: this.currentTime,
      authID: this.authService.userId,
      // Other info you want to add here
    });
  }

  clneutral() {
    this.firestore.doc(`/feedback/${this.currentTime}/`).set({
      cat: 'neutral',
      zeit: this.currentTime,
      authID: this.authService.userId,
      // Other info you want to add here
    });
  }

  clunlike() {
    this.firestore.doc(`/feedback/${this.currentTime}/`).set({
      cat: 'unlike',
      zeit: this.currentTime,
      authID: this.authService.userId,
      // Other info you want to add here
    });
  }

  sendelob() {

    this.firestore.doc(`/feedback/${this.currentTime}/`).set({
      cat: 'feedback',
      zeit: this.currentTime,
      authID: this.authService.userId,
      feedback: this.feedback,
      // Other info you want to add here
    });

    this.alert('Ihre Nachricht wurde übermittelt!');
  }

}
