import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface News {
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
export class NewsService {

  private itemCollection: AngularFirestoreCollection<News>;

  private item: Observable<News[]>;

  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<News>('content', ref => ref.where('cat', '==', 'news'));

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

  getNews() {
    return this.item;
  }

  getNew(id) {
    return this.itemCollection.doc<News>(id).valueChanges();
  }

}
