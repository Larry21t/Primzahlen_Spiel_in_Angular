import { Component } from '@angular/core';
import { NumberTable } from './share/numberTable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primzahlenSpiel';
  numberTable!: NumberTable;

}
