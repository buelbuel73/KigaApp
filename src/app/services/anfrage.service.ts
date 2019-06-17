import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Anfragen {
  id?: string;
  title: string;
  content1: string;
  content2: string;
  content3: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AnfrageService {

  private itemACollection: AngularFirestoreCollection<Anfragen>;
  private itemA: Observable<Anfragen[]>;
  private itemBCollection: AngularFirestoreCollection<Anfragen>;
  private itemB: Observable<Anfragen[]>;
  private itemCCollection: AngularFirestoreCollection<Anfragen>;
  private itemC: Observable<Anfragen[]>;

  constructor( private firestore: AngularFirestore ) {

  this.itemACollection = this.firestore.collection('anfragen', ref => ref.where('aktiv', '==', true).where('cat', '==', 'input'));

    this.itemA = this.itemACollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
  );

  this.itemBCollection = this.firestore.collection('anfragen', ref => ref.where('aktiv', '==', true).where('cat', '==', 'kinder'));

    this.itemB = this.itemBCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(b => {
          const data = b.payload.doc.data();
          const id = b.payload.doc.id;
          return { id, ...data };
        });
      })
  );

  this.itemCCollection = this.firestore.collection('anfragen', ref => ref.where('aktiv', '==', true).where('cat', '==', 'option'));

    this.itemC = this.itemCCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(c => {
          const data = c.payload.doc.data();
          const id = c.payload.doc.id;
          return { id, ...data };
        });
      })
  );

  }

  getAnfragsA() {
    return this.itemA;
  }

  getAnfragA(id) {
    return this.itemACollection.doc<Anfragen>(id).valueChanges();
  }

  getAnfragsB() {
    return this.itemB;
  }

  getAnfragB(id) {
    return this.itemBCollection.doc<Anfragen>(id).valueChanges();
  }

  getAnfragsC() {
    return this.itemC;
  }

  getAnfragC(id) {
    return this.itemCCollection.doc<Anfragen>(id).valueChanges();
  }

}
