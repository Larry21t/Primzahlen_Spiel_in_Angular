import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BewerteterTableComponent } from './bewerteter-table/bewerteter-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BewerteterTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
