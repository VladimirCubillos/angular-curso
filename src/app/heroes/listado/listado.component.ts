import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  constructor() {
    console.log('constructor');
  }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(`Borrando a heroe: ${this.heroeBorrado}...`);
  }

}
