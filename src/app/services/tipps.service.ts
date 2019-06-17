import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tipps {
  id?: string;
  cat: string;
  img: string;
  title: string;
  subtitle: string;
  content1: string;
  content2: string;
  content3: string;
  }

@Injectable({
  providedIn: 'root'
})
export class TippsService {

  private itemCollection: AngularFirestoreCollection<Tipps>;

  private item: Observable<Tipps[]>;

  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<Tipps>('content', ref => ref.where('cat', '==', 'tipps'));

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

  getTipps() {
    return this.item;
  }

  getTipp(id) {
    return this.itemCollection.doc<Tipps>(id).valueChanges();
  }

}
