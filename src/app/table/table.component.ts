import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NumberTable } from '../share/numberTable';

const start: number = 1;
const hoechsteZahl: number = 200;
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
  gefiltertesArray: any[] = this.sieben([...this.volleTabelle.getZahlenArray()]);


  @Output() punktestandVeraendernEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
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



  bewerten(clickedZelle: any){
    let inhalt: number = parseInt(clickedZelle.path[0].innerText);
    let istPrimzahl: boolean = false;
    if(this.gefiltertesArray.includes(inhalt)){
      istPrimzahl = true;
      clickedZelle.path[0].classList.add('primzahl')//evtl. Komponente oder Klasse/Interface Zelle machen? Diese hat dann die Eigenschaften Zahl, istPrimzahl und evtl. noch Farbe.
      //anstatt direkt Farbe zu ändern einfach eine CSS-Klasse hinzufügen

    }
    else{
      clickedZelle.path[0].classList.add('keinePrimzahl');
    }
    this.punktestandVeraendernEvent.emit(istPrimzahl);

  }
}
