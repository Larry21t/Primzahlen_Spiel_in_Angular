import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { StateService } from '../state.service';
// import  { NumberTable } from '../share/numberTable'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  volleTabelle$ = this.service.state$.pipe(
    map(state => state.zahlenArray)
  )
  volleTabelle: number[] = [];
  subscriptionVolleTabelle: Subscription = this.volleTabelle$.subscribe(
    (value: number[]) => {
      for(let i = 0; i < value.length; i++){
        this.volleTabelle.push(value[i]);
      }
    }
  )
  breite$ = this.service.state$.pipe(
    map(state => state.breite)
  );
  breiteZahl: number = 0;
  subscriptionBreite: Subscription = this.breite$.subscribe(
    (value: number) => {
      this.breiteZahl = value;
    }
  )
  breite: number[] = new Array(this.breiteZahl);
  hoehe$ = this.service.state$.pipe(
    map(state => state.hoehe)
  );
  hoeheZahl: number = 0;
  subscriptionHoehe: Subscription = this.hoehe$.subscribe(
    (value: number) => {
      this.hoeheZahl = value;
    }
  )
  hoehe: number[] = new Array(this.hoeheZahl)
  gefiltertesArray: any[] = this.sieben(this.volleTabelle);


  constructor(public service: StateService) { }

  ngOnInit(): void {
  }


  sieben(anArray: any[]): any[]{
    let gesiebtesArray: any[] = [...anArray]
    let start$ = this.service.state$.pipe(
      map(state => state.startZahl)
    )
    let start: number = 0;
    start$.subscribe(
      (value: number) => {
        start = value
      }
    )
    gesiebtesArray[gesiebtesArray.indexOf(start)] = "X"
    let zahlenReihe = start + 1;
    let zahl = zahlenReihe + zahlenReihe; //Achtung gleiche Zeile wie unten nach erstem while{}
    const highestNumber = gesiebtesArray[gesiebtesArray.length-1]
    while(zahlenReihe <= Math.sqrt(highestNumber)){
      while (zahl <= highestNumber){
        gesiebtesArray[gesiebtesArray.indexOf(zahl)] = "X"
        zahl += zahlenReihe
      }
      zahlenReihe += 1;
      zahl = zahlenReihe + zahlenReihe;
    }
    return gesiebtesArray;
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
