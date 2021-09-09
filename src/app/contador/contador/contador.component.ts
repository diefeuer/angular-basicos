import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es:
      <Strong> {{ base }} </Strong>
    </h3>
    <button (click)="acumular(+exponente)">+5</button>
    <span>{{ base }}</span>
    <button (click)="acumular(-exponente)">-5</button>
  `,
})
export class ContadorComponent {
  public titulo: string = 'Contador App';

  base: number = 5;
  exponente: number = 5;

  acumular(valor: number) {
    this.base += valor;
  }
}
