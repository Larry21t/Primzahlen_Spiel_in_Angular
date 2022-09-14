import { Component, OnInit, Input } from '@angular/core';
import { start }  from '../table/table.component'



@Component({
  selector: 'app-bewerteter-table',
  templateUrl: './bewerteter-table.component.html',
  styleUrls: ['./bewerteter-table.component.css']
})
export class BewerteterTableComponent implements OnInit {
  @Input() zelle!: number;
  // @Input() numbersInTable!: number[];
  // filteredTable: number[] = this.sieben([...this.numbersInTable]);




  constructor() { }

  ngOnInit(): void {
    console.log(this.zelle)
  }

  sieben(anArray: any[]): any[]{
    anArray[anArray.indexOf(start)] = "X"
    let zahlenReihe = start + 1;
    let zahl = zahlenReihe + zahlenReihe; //Achtung gleiche Zeile wie unten nach erstem while{}
    const highestNumber = anArray[anArray.length-1]
    while(zahlenReihe <= Math.sqrt(highestNumber)){
      while (zahl <= highestNumber){
        anArray[anArray.indexOf(zahl)] = "X"
        zahl += zahlenReihe
      }
      zahlenReihe += 1;
      zahl = zahlenReihe + zahlenReihe;
    }
    return anArray;
  }

}
