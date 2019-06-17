import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Preise {
  id?: string;
  cat: string;
  img: string;
  title: string;
  subtitle: string;
  content1: string;
}

@Injectable({
  providedIn: 'root'
})
export class PreiseService {

  private itemCollection: AngularFirestoreCollection<Preise>;

  private item: Observable<Preise[]>;

  constructor( private firestore: AngularFirestore ) {
    this.itemCollection = this.firestore.collection<Preise>('einrichtung', ref => ref.where('cat', '==', 'preise'));

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

  getPreise() {
    return this.item;
  }

  getPreis(id) {
    return this.itemCollection.doc<Preise>(id).valueChanges();
  }

}
