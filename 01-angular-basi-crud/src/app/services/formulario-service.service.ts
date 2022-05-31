import { Injectable } from '@angular/core';
import { personainterface } from '../interfaces/persona.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormularioServiceService {
  private _personasArray: personainterface[] = [];
  private personaInfo: any = '';

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

  infoPersona(id: number) {
    for (let i = 0; i < this._personasArray.length; i++) {
      if (this._personasArray[i].id == id) {
        this.personaInfo = this._personasArray[i];
        // console.log(this.personaInfo);
      }
    }

    return this.personaInfo;
  }

  editarPersona(data: personainterface) {
    for (let i = 0; i < this._personasArray.length; i++) {
      if (this._personasArray[i].id == data.id) {
        this._personasArray[i].nombre = data.nombre;
        this._personasArray[i].email = data.email;
        this._personasArray[i].tel = data.tel;
        this._personasArray[i].edad = data.edad;
      }
    }
  }
}
