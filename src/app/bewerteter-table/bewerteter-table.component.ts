import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bewerteter-table',
  templateUrl: './bewerteter-table.component.html',
  styleUrls: ['./bewerteter-table.component.css']
})
export class BewerteterTableComponent implements OnInit {
  @Input() tableBewertet!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
