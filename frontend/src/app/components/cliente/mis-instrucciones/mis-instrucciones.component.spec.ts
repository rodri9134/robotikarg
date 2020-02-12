import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisInstruccionesComponent } from './mis-instrucciones.component';

describe('MisInstruccionesComponent', () => {
  let component: MisInstruccionesComponent;
  let fixture: ComponentFixture<MisInstruccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisInstruccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
