import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PunktestandComponent } from './punktestand/punktestand.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PunktestandComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
