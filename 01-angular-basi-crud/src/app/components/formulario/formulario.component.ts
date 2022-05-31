import { Component } from '@angular/core';
import { personainterface } from 'src/app/interfaces/persona.interfaces';
import { FormularioServiceService } from '../../services/formulario-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nuevo: personainterface = {
    id: 0,
    nombre: '',
    email: '',
    tel: '',
    edad: 0,
  };

  constructor(private personaS: FormularioServiceService) {}

  agregar() {
    // console.log(this.nuevo);
    this.nuevo.id = this.personaS.idConteo + 1;
    // console.log(this.nuevo);

    // console.log(this.nuevo);
    this.personaS.agregarPersona(this.nuevo);
    this.nuevo = {
      id: 0,
      nombre: '',
      email: '',
      tel: '',
      edad: 0,
    };
  }
}
