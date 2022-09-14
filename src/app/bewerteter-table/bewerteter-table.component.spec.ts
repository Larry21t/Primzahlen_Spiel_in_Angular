import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerteterTableComponent } from './bewerteter-table.component';

describe('BewerteterTableComponent', () => {
  let component: BewerteterTableComponent;
  let fixture: ComponentFixture<BewerteterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BewerteterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BewerteterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
