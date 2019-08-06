import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo:Array<object> = []

  ionViewDidEnter() {
    console.log('EXECUTOU O VIEW DID ENTER');
      this.catalogo.push({
      nome: 'Pepperoni lombado com queijo grudante',
      descricao: 'Pepperoni, lombo, bastante queijo muçarela, cogumelos e um leve toque de azeite trufado e azeitonas.',
      preco: 'R$100,00'
    })
  }
}
