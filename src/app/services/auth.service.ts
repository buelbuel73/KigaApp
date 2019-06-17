import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Plugins, PushNotificationToken } from '@capacitor/core';
import * as firebase from 'firebase';

const { PushNotifications } = Plugins;


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userId: string = null;
  authState: any;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  userLogin(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  userSignup(email: string, password: string, fullName: string): Promise<any> { return this.afAuth.auth
    .createUserWithEmailAndPassword(email, password) .then(userCredential => {
    PushNotifications.register(); PushNotifications.addListener(
    'registration',
    (token: PushNotificationToken) => { this.firestore.doc(`/userProfile/${userCredential.user.uid}`).set({
    admin: true, email,
    fullName,
    token: token.value
    }); }
    );
    PushNotifications.addListener('registrationError', (error: any) => {
    console.log('error on register ' + JSON.stringify(error)); this.firestore.doc(`/userProfile/${userCredential.user.uid}`).set({
      admin: false,
      team: false,
      eltern: true,
      elternbeirat: false,
      riesen: false,
      kobolde: false,
      zwerge: false,
      grashüpfer: false,
      stoppelhopser: false,
      wiesenkrabbler: false,
      email,
      fullName,
       token: null
    }); });
    });
    }


  userLogout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  passwordReset(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  isAdmin(): Promise<boolean> {
    return new Promise((resolve) => {
      firebase
        .firestore()
        .doc(`userProfile/${this.userId}`)
        .get()
        .then(adminSnapshot => {
          resolve(adminSnapshot.data().admin);
        });
    });
  }

  isTeam(): Promise<boolean> {
    return new Promise((resolve) => {
      firebase
        .firestore()
        .doc(`userProfile/${this.userId}`)
        .get()
        .then(teamSnapshot => {
          resolve(teamSnapshot.data().team);
        });
    });
  }

  getUser(): firebase.User {
  return this.afAuth.auth.currentUser;
  }

  getUid() {
    return this.userId;
    }

}
