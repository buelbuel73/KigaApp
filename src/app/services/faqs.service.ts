import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Faqs {
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
export class FaqsService {

  private itemCollection: AngularFirestoreCollection<Faqs>;

  private item: Observable<Faqs[]>;

  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<Faqs>('content', ref => ref.where('cat', '==', 'faqs'));

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

  getFaqs() {
    return this.item;
  }

  getFaq(id) {
    return this.itemCollection.doc<Faqs>(id).valueChanges();
  }

}
