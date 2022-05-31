import { Injectable } from '@angular/core';
import { personainterface } from '../interfaces/persona.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormularioServiceService {
  private _personasArray: personainterface[] = [];
  private personaEditaInfo: any = '';

  constructor() {}

  get personasGet(): personainterface[] {
    return [...this._personasArray];
  }

  get idConteo(): number {
    return this._personasArray.length;
  }

  agregarPersona(persona: personainterface) {
    this._personasArray.push(persona);
  }

  eliminarPersona(id: number) {
    this._personasArray.splice(id, 1);
  }

  buscarPersona(ide: number) {
    // console.log(this._personasArray);
    console.log(ide);
    // let editp: any;

    for (let i = 0; i < this._personasArray.length; i++) {
      if (this._personasArray[i].id == ide) {
        this.personaEditaInfo = this._personasArray[i];
      }
    }
    // this.personaEditaInfo = this._personasArray.find((data) => {
    //   data.id = ide;
    // });

    console.log(this.personaEditaInfo);
    return this.personaEditaInfo;
  }

  editarPersona() {}
}
