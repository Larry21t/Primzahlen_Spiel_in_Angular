import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunktestandComponent } from './punktestand.component';

describe('PunktestandComponent', () => {
  let component: PunktestandComponent;
  let fixture: ComponentFixture<PunktestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunktestandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunktestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
