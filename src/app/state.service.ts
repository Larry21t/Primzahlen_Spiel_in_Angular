import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, scan, shareReplay, startWith } from 'rxjs';
import { MyState } from './share/myState';

const start: number = 1;
const highestNr: number = 200;
const breiteTable: number = 10;




@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: MyState = {
    punkteStand: 0,
    // startZahl: 1,
    // breite: 10,
    // hoechsteZahl: 200,
    // hoehe: Math.round(highestNr/breiteTable + 0.49999999),
    // zahlenArray: this.fillArray(start, highestNr)
  };


  state$ = new BehaviorSubject<MyState>(this.state);

  constructor() { }

  dispatch(message: String){
    this.state = calculateState(this.state, message)
    this.state$.next(this.state)
  }

  // fillArray(start: number, end: number) : number[]{
  //   let i: number = start;
  //   let myArray: number[] = [];
  //   while(i <= end){
  //     myArray.push(i);
  //     i++
  //   }
  //   return myArray;
  // }
}




function calculateState(state: MyState, message: String): MyState {
  switch(message){
    case 'INCREMENT':{
      return {
        ...state,
        punkteStand: state.punkteStand + 1
      }
    };

    case 'DECREMENT': {
      return{
        ...state,
        punkteStand: state.punkteStand - 1
      };
    }

    case 'RESET': {
      return { ...state, punkteStand: 0 };
    }

    default: return state;

  }
}



// Nachrichten auf den Zustand reduzieren


// const initialState = {
//   punkteStand: 0
// };
//const messages = ['INCREMENT', 'DECREMENT', 'INCREMENT'];
//const result = messages.reduce(calculateState, initialState)



// Nachrichten reduzieren mit RxJS
// const state$ = messages$.pipe(
//   startWith('INIT'),
//   scan(calculateState, initialState),
//   shareReplay(1)
// );



// Test von Array.reduce()
// const values = [1,2,3,4];
// const reducer = (previous: number, current: number) => previous + current;
// const result = values.reduce(reducer, 0)



