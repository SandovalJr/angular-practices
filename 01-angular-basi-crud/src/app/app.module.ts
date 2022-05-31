import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioEditComponent } from './components/formulario-edit/formulario-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormularioComponent,
    FormularioEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
