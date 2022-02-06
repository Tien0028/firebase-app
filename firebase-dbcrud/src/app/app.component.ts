import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-dbcrud';
  public things: Observable<any>[];

  constructor(afDB: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = afDB.list('list');
    itemsRef.valueChanges().subscribe(
      x => {this.things = x; }
    );
  }


}
