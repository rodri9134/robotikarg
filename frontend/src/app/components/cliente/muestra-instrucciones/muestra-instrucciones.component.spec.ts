import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraInstruccionesComponent } from './muestra-instrucciones.component';

describe('MuestraInstruccionesComponent', () => {
  let component: MuestraInstruccionesComponent;
  let fixture: ComponentFixture<MuestraInstruccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraInstruccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
