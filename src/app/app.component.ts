
import { Component} from '@angular/core';
import { NumberTable } from './share/numberTable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primzahlenSpiel';
  numberTable!: NumberTable;
  punktestand: number = 0;

  punktestandVeraendern(istPrimzahl: boolean): void{
    if(istPrimzahl){
      this.punktestand += 1;
    }
    else{
      this.punktestand -= 1;
    }
  }
}
