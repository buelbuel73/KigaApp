import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

export interface Krankm {
  authID: string;
  time: string;
  zeit: string;
  dauer: string;
  kind: string;
  }



@Injectable({
  providedIn: 'root'
})
export class MedkitService {

  private itemCollection: AngularFirestoreCollection<Krankm>;
  private item: Observable<Krankm[]>;

  public kindList: AngularFirestoreCollection<any>;
  public userId: string;


  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {

    this.afAuth.authState.subscribe(user => {
      this.userId = user.uid;
      this.kindList = this.firestore.collection(`/userProfile/${user.uid}/kindList`);
    });

    const woche_alt =  new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);

    this.itemCollection = this.firestore.collection<Krankm>('medkit', ref =>
    ref.orderBy('time', 'desc').endAt(woche_alt));

    this.item = this.itemCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }
  getKrankms() {
    return this.item;
  }

  getKrankm(id) {
    return this.itemCollection.doc<Krankm>(id).valueChanges();
  }

  getKindList(): AngularFirestoreCollection<any> {
    return this.kindList;
  }

  getKind(kindId: string): AngularFirestoreDocument<any> {
    return this.firestore.doc(`/userProfile/ ${this.userId} /kindList/${kindId}`);
  }

  payBill(kindId: string): Promise<any> {
    return this.kindList.doc(kindId).update({ paid: true });
  }

}
