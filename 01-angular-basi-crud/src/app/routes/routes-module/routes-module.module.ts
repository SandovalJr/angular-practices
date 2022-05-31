import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { FormularioEditComponent } from '../../components/formulario-edit/formulario-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: FormularioEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModuleModule {}
