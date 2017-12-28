import {Dooino} from "./Dooino";
import {Observable} from "rxjs/Observable";
import {Action} from "./Action";

export class DooinoRepository {
  private items: Dooino[];

  constructor() {
    this.items = [];
  }

  allWithRefresh() {
    this.resetLocalData();
    return this.all();
  }

  all() {
    return Observable.create(observer => {
      observer.next(this.loadAll());
      observer.complete();
    });
  }

  ofId(id: string) {
    for (var item of this.loadAll()) {
      if (item.getId() === id) {
        return item;
      }
    }

    return null;
  }

  private loadAll() {
    if (this.items.length === 0) {
      this.items = [
        this.buildRelay(),
        this.buildRelay(),
        this.buildRelay(),
        this.buildRelay(),
      ];
    }

    return this.items;
  }

  private resetLocalData()
  {
    this.items = [];
  }

  private buildRelay() {
    let id = Math.round(Math.random() * 100);

    return new Dooino(
      id.toString(),
      'Dooino #' + id.toString(),
      'relay',
      '192.168.4.1',
      'http://dooino-' + id.toString() + '.local',
      [
        new Action('on', '/in/on'),
        new Action('off', '/in/off'),
      ],
      [
        new Action('status', '/out/status'),
      ]);
  }
}
