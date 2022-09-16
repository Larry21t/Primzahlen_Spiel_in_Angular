import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-punktestand',
  templateUrl: './punktestand.component.html',
  styleUrls: ['./punktestand.component.css']
})
export class PunktestandComponent implements OnInit {
  @Input() punkte!: number;

  constructor() { }

  ngOnInit(): void {
  }

  // punktestandAktualisieren(istPrimzahl: any): number{
  //   let punkte = 0;
  //   if(istPrimzahl){
  //     punkte = 1;
  //   }
  //   else{
  //     punkte = -1;
  //   }
  //   return (this.punktestand + punkte);
  // }


}
