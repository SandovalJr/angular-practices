import { Component, OnInit } from '@angular/core';
import { personainterface } from 'src/app/interfaces/persona.interfaces';
import { FormularioServiceService } from '../../services/formulario-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  constructor(private personaS: FormularioServiceService) {}

  get personas() {
    return this.personaS.personasGet;
  }

  eliminar(id: number) {
    id = id - 1;
    this.personaS.eliminarPersona(id);
  }

  editar(id: number) {
    id = id;
    // console.log(id);
    // this.personaS.buscarPersona(id);
  }


}
