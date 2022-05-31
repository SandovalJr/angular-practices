import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FormularioComponent } from '../../components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})



export class RoutesModuleModule {}
