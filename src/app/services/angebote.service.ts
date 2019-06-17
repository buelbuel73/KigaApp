import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Angebote {
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
export class AngeboteService {

  private itemCollection: AngularFirestoreCollection<Angebote>;

  private item: Observable<Angebote[]>;


  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<Angebote>('content', ref => ref.where('cat', '==', 'angebote'));

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

  getAngebote() {
    return this.item;
  }

  getAngebot(id) {
    return this.itemCollection.doc<Angebote>(id).valueChanges();
  }

}
