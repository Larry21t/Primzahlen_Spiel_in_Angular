import { Component } from '@angular/core';

type ViewState = 'idle' | 'bewertung'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primzahlenSpiel';
  viewState: ViewState = 'idle';
  zelle!: number;

  showBewertung(zelle: number): void{
    this.viewState = 'bewertung';
    this.zelle = zelle;
  }
}
