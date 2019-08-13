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
    this.listarCatalogo()
  }
  listarCatalogo() {
    const tamanhodoBanco = localStorage.length
    for(let i = 0; i < tamanhodoBanco; i++){
      const chaveAtual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveAtual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)
    }
  }

}
