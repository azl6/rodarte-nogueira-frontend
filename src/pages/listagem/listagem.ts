import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoDTO } from '../../models/aluno.dto';
import { AlunoService } from '../../services/aluno.service';

/**
 * Generated class for the ListagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listagem',
  templateUrl: 'listagem.html',
})
export class ListagemPage {

  items: AlunoDTO[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alunoService: AlunoService) {
  }

  ionViewDidLoad() {
    this.alunoService.findAllByIdadeCrescente()
    .subscribe(response => {
      this.items = response;
    }, error => {
      console.log(error);
    })
  }
}
