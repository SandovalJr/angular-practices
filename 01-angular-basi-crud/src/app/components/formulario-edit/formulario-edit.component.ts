import { Component, OnInit } from '@angular/core';
import { personainterface } from 'src/app/interfaces/persona.interfaces';
import { FormularioServiceService } from '../../services/formulario-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.css'],
})
export class FormularioEditComponent implements OnInit {
  public id: any;

  nuevo: personainterface = {
    id: 0,
    nombre: '',
    email: '',
    tel: '',
    edad: 0,
  };

  constructor(
    private formS: FormularioServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
    const informacion = this.formS.infoPersona(this.id);
    // console.log(informacion)

    this.nuevo.id = informacion.id;
    this.nuevo.nombre = informacion.nombre;
    this.nuevo.email = informacion.email;
    this.nuevo.tel = informacion.tel;
    this.nuevo.edad = informacion.edad;
  }

  gotoregresar() {
    this.router.navigate(['']);
  }

  actualizar() {
    this.formS.editarPersona(this.nuevo);
    this.router.navigate(['']);
  }
}
