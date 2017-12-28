import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DooinoRepository } from "../../lib/DooinoRepository";
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items: object[];

  constructor(
    public navCtrl: NavController,
    public dooinoRepository: DooinoRepository
  ) {
    this.reloadDooinos();
  }

  reloadDooinos() {
    this.dooinoRepository.allWithRefresh().subscribe(dooinos => {
      this.items = [];
      for (let i = 0; i < dooinos.length; i++) {
        this.items.push({
          id: dooinos[i].getId(),
          name: dooinos[i].getName(),
          type: dooinos[i].getType(),
          address: dooinos[i].getAddress(),
          ip: dooinos[i].getIp()
        });
      }
    });
  }

  itemSelected(item) {
    this.navCtrl.push(
      DetailPage,
      {
        dooinoId: item.id
      }
    );
  }
}

