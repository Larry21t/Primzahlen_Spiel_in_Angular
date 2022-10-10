import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, startWith } from 'rxjs';
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
    punkteStand: 0,

  };

  state$ = new BehaviorSubject<MyState>(this.state);

  constructor() { }


  // incrementCounter(){
  //   this.state.counter++;
  //   this.state$.next(this.state)
  // }

  // incrementCounter(){
  //   this.state = {
  //     ...this.state,
  //     counter: this.state.counter + 1
  //   }
  //   this.state$.next(this.state)
  // }

  dispatch(message: String){
    this.state = calculateState(this.state, message)
    this.state$.next(this.state)
  }
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


// const initialState = {
//   counter: 0,
//   anotherProperty: 'foobar'
// };

// const messages = ['INCREMENT', 'DECREMENT', 'INCREMENT'];


// const result = messages.reduce(calculateStateCounter, initialState)
