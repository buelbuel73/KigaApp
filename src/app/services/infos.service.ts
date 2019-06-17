import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Infos {
  id?: string;
  cat: string;
  img1: string;
  img2: string;
  img3: string;
  title: string;
  subtitle: string;
  adress_str: string;
  adress_ort: string;
  adress_tel: string;
  adress_mail: string;
  openday1: string;
  openday2: string;
  opentime1: string;
  opentime2: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  content6: string;
  content7: string;
  content8: string;
  content9: string;
  daten_fakten1: string;
  daten_fakten2: string;
  daten_fakten3: string;
  daten_fakten4: string;
  daten_fakten5: string;
  daten_fakten6: string;
  daten_fakten7: string;
  daten_fakten8: string;
  speiseplan1: string;
  speiseplan1_pdf: string;
  speiseplan2: string;
  speiseplan2_pdf: string;
  }

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  private itemCollection: AngularFirestoreCollection<Infos>;

  private item: Observable<Infos[]>;

  constructor( private firestore: AngularFirestore ) {

    this.itemCollection = this.firestore.collection<Infos>('einrichtung', ref => ref.where('cat', '==', 'infos'));

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

  getInfos() {
    return this.item;
  }

}
