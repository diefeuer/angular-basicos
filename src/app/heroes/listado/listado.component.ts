import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Loki'];
  heroeBorrado: string  = '';
  borrarHeroe() {
    console.log('Borrando');
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }


}
