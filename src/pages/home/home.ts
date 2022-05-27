import { Component } from '@angular/core';
import { AlertController, LoadingController, MenuController, NavController } from 'ionic-angular';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
     public menu: MenuController,
     public alunoService: AlunoService,
     public loadCtrl: LoadingController,
     public alertCtrl: AlertController) {
  }

  presentLoading(){
    let loader = this.loadCtrl.create({
      content: "Gerando a tabela..."
    });
    loader.present();
    return loader;
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  listar(){
    this.navCtrl.push("ListagemPage");
  }

  callAlert(){
    let alert = this.alertCtrl.create({
        title: "Tabela criada com sucesso!",
        message: "Arquivo excelGerado.xlsx criado na raiz do backend",
        buttons: [
        {
            text: "Ok"
        }    
        ]
    });
    alert.present();
}

  gerarExcel(){
    let loader = this.presentLoading();
    this.alunoService.gerarExcel()
    .subscribe(response => {
      loader.dismiss();
      this.callAlert();
    }, error => {
      console.log(error);
    })
  }
}
