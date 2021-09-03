import { Input, Output, Component, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input ( 'nuevo' ) nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ){}

  //Output emite un cambio, es importante ponerle el tipo
  //@Output() onNuevoPersonaje: EventEmitter< Personaje > = new EventEmitter< Personaje >();

  agregar(){
    //Validacion cuando esta vacio
    if ( this.nuevo.nombre.trim().length === 0 ){ 
      return;
    }

    //this.onNuevoPersonaje.emit( this. nuevo );
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
