export class NumberTable{
  private startZahl: number;
  private breite: number;
  private hoehe: number;
  private hoechsteZahl: number;
  private zahlenArray: number[];

  constructor(startZahl: number, breite: number, hoechsteZahl: number){
    this.startZahl = startZahl;
    this.breite = breite;
    this.hoechsteZahl = hoechsteZahl;
    this.hoehe = Math.round(this.hoechsteZahl/this.breite + 0.49999999)
    this.zahlenArray = this.fillArray();
  }

  getStartZahl(): number{
    return this.startZahl;
  }

  getBreite(): number{
    return this.breite;
  }


  getHoehe(): number{
    return this.hoehe;
  }

  getHoechsteZahl(): number{
    return this.hoechsteZahl;
  }

  getZahlenArray(): number[]{
    return this.zahlenArray;
  }

  fillArray() : number[]{
    let i: number = this.startZahl;
    let myArray: number[] = [];
    while(i <= this.hoechsteZahl){
      myArray.push(i);
      i++
    }
    return myArray;
  }


}
