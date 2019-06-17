import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Team {
  id?: string;
  cat: string;
  img: string;
  name: string;
  begin: string;
  rolle: string;
  motto: string;
  }

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private itemCollection: AngularFirestoreCollection<Team>;

  private item: Observable<Team[]>;

  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<Team>('einrichtung', ref => ref.where('cat', '==', 'team'));

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

  getTeam() {
    return this.item;
  }

}
