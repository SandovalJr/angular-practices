import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioEditComponent } from './components/formulario-edit/formulario-edit.component';

// import routes
import { RoutesModuleModule } from './routes/routes-module/routes-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormularioComponent,
    FormularioEditComponent,
  ],
  imports: [BrowserModule, RoutesModuleModule, FormsModule],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
