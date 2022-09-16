import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyState } from './share/myState';
import { NumberTable } from './share/numberTable';

const start: number = 1;
const hoechsteZahl: number = 200;
const breite: number = 10;


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: MyState = {
    numberTable: new NumberTable(start, breite, hoechsteZahl),
    punkteStand: 0,
    istPrimzahl: false,
    counter: 0
  };

  state$ = new BehaviorSubject<MyState>(this.state);

  constructor() { }

  punkteStandErhoehen(){
    this.state.punkteStand++;
    this.state$.next(this.state)
  }

  punkteStandReduzieren(){
    this.state.punkteStand--;
    this.state$.next(this.state)
  }

  punktestandAktualisieren(istPrimzahl: any): void{
    if(istPrimzahl){
      this.punkteStandErhoehen();
    }
    else{
      this.punkteStandReduzieren();
    }
  }

  incrementCounter(){
    this.state.counter++;
    this.state$.next(this.state)
  }




}
