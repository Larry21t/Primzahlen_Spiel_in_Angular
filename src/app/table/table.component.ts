import { state } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from '../state.service';
import  { NumberTable } from '../share/numberTable'

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
  // volleTabelle$ = this.service.state$.pipe(
  //   map(state => state.zahlenArray)
  // )
  // volleTabelle = this.volleTabelle$.subscribe //-> ich brauche hier mehr Wissen über Observables, deshalb im Buch weiterlesen
  breite: number[] = (new NumberTable(start, breite, breite)).getZahlenArray();//evtl. kann man schon in der Klasse NumberTable die Breite als Array definieren
  // breite$ = this.service.state$.pipe(
  //   map(state => state.breite)
  // );
  // breite: any[] = new Array(this.breite$);
  hoehe: number[] = (new NumberTable(start, this.volleTabelle.getHoehe(), this.volleTabelle.getHoehe())).getZahlenArray();
  // hoehe$ = this.service.state$.pipe(
  //   map(state => state.hoehe)
  // );
  // hoehe: any[] = new Array(this.hoehe$);
  gefiltertesArray: any[] = this.sieben([...this.volleTabelle.getZahlenArray()]);
  // gefiltertesArray: any[] = this.sieben(this.fullArray$);


  constructor(public service: StateService) { }

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
    if(!(clickedZelle.path[0].classList.contains('primzahl') || clickedZelle.path[0].classList.contains('keinePrimzahl'))){
      let inhalt: number = parseInt(clickedZelle.path[0].innerText);
      if(this.gefiltertesArray.includes(inhalt)){
        this.service.dispatch('INCREMENT')
        clickedZelle.path[0].classList.add('primzahl');//evtl. Komponente oder Klasse/Interface Zelle machen? Diese hat dann die Eigenschaften Zahl, istPrimzahl und evtl. noch Farbe.
      }
      else{
        this.service.dispatch('DECREMENT')
        clickedZelle.path[0].classList.add('keinePrimzahl');
      }
    }

  }
}
