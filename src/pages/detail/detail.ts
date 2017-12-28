import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { DooinoRepository } from "../../lib/DooinoRepository";
import {Dooino} from "../../lib/Dooino";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  dooinoId: string;
  dooino: Dooino;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dooinoRepository: DooinoRepository
  ) {
    console.log(navParams.get('dooinoId'));
    this.dooinoId = navParams.get('dooinoId');
    this.dooino = dooinoRepository.ofId(this.dooinoId);
    console.log(this.dooino);
  }
}

