import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  
  heroeBorrado: string = '';

  heroes: string[] = [
    'Hero',
    'Saitama',
    'Spiderman',
    'Ironman',
    'Hulk', 
    'Cap. America'
  ];

  borrarHeroe(): void {
   this.heroeBorrado = this.heroes.shift() || '';    
  };

}
