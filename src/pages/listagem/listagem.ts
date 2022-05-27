import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alunoService: AlunoService,
     public loadCtrl: LoadingController) {
  }

  presentLoading(){
    let loader = this.loadCtrl.create({
      content: "Carregando..."
    });
    loader.present();
    return loader;
  }

  ionViewDidLoad() {
    let loader = this.presentLoading();
    this.alunoService.findAllByIdadeCrescente()
    .subscribe(response => {
      this.items = response;
      loader.dismiss();
    }, error => {
      console.log(error);
    })
  }
}
