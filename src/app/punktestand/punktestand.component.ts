import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from '../state.service';


@Component({
  selector: 'app-punktestand',
  templateUrl: './punktestand.component.html',
  styleUrls: ['./punktestand.component.css']
})
export class PunktestandComponent implements OnInit {

  punktestand$ = this.service.state$.pipe(
    map(state => state.punkteStand)
  )

  // counter$ = this.service.state$.pipe(
  //   map(state => state.counter)
  // )

  constructor(public service: StateService ) { }

  increment(){
    this.service.dispatch('INCREMENT');
  }

  decrement(){
    this.service.dispatch('DECREMENT')
  }

  ngOnInit(): void {
  }

}
