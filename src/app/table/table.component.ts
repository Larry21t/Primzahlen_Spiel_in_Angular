import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NumberTable } from '../share/numberTable';

const start: number = 1;
const hoechsteZahl: number = 100;
const breite: number = 10;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  volleTabelle: NumberTable = new NumberTable(start, breite, hoechsteZahl);
  breite: number[] = (new NumberTable(start, breite, breite)).getZahlenArray();//evtl. kann man schon in der Klasse NumberTable die Breite als Array definieren
  hoehe: number[] = (new NumberTable(start, this.volleTabelle.getHoehe(), this.volleTabelle.getHoehe())).getZahlenArray();
  // numbersInTable: number[] = this.fillArray(hoechsteZahl);
  // breite: number[] = this.fillArray(breite);
  // hoehe: number[] = this.fillArray(hoehe)
  gefiltertesArray: any[] = this.sieben([...this.volleTabelle.getZahlenArray()]);

  constructor() { }

  ngOnInit(): void {
  }


  // fillArray(highestNumber: number) : number[]{
  //   let i: number = start;
  //   let myArray: number[] = [];
  //   while(i <= highestNumber){
  //     myArray.push(i);
  //     i++
  //   }
  //   return myArray;
  // }


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

  bewerten(clickedZelle: any): any{
    let inhalt: number = parseInt(clickedZelle.path[0].innerText);
    let istPrimzahl: boolean = false;
    if(this.gefiltertesArray.includes(inhalt)){
      istPrimzahl = true;
      clickedZelle.path[0].bgColor = 'green' //evtl. Komponente Zelle machen?
    }
    else{
      clickedZelle.path[0].bgColor = 'red'
    }
    return istPrimzahl;
  }



  // showBewertung(eventClicked: any){
  //   this.showBewertungEvent.emit(eventClicked.path[0].innerText);
  // }

  // getFilteredTable(eventFiltered: number[]){
  //   this.filteredTable = eventFiltered;
  // }

}
